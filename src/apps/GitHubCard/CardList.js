import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './card-list.scss';
import { CardRepos } from './card-repos';

export const CardList = ({ profiles }) => (
  <>
    {profiles.map((profile) => (
      <CardComp key={profile.id} {...profile} />
    ))}
  </>
);

const CardComp = ({ login, avatar_url, name, company, bio, blog }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${login}/repos`,
        );
        setRepos(data);
      } catch (err) {
        toast('Error');
      }
    };
    fetchProfile();
  }, [login]);

  return (
    <CardSection>
      <LeftSection>
        <img alt="user" src={avatar_url} style={{ width: '9em' }} />
        <div className="font-weight-bold mt-1">{name}</div>
        <div className="company">{company}</div>
        <div className="bio">{bio}</div>
        {blog && (
          <div className="blog">
            {linkSvg} <a href={blog}>{blog}</a>
          </div>
        )}
      </LeftSection>
      <RightSection>
        <Tabs className="git-cards">
          <TabList className="d-flex">
            <Tab>{overviewSvg} Overview</Tab>
            <Tab>
              {reposSvg} Repositories{' '}
              <span className="counter">{repos.length}</span>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="cards">
              {repos.slice(0, 6).map((repo) => (
                <CardRepos repo={repo} key={repo.id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="cards">
              {repos.map((repo) => (
                <CardRepos repo={repo} key={repo.id} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </RightSection>
    </CardSection>
  );
};

const CardSection = styled.div`
  display: flex;
  margin-top: 1em;
  font-size: 0.8em;
  //border: 1px solid #ccc;
  :last-child {
    margin-bottom: 1em;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .company {
    color: blue;
  }
  .bio {
    max-width: 11rem;
    font-size: 0.7em;
    text-align: left;
  }
  .blog {
    max-width: 11rem;
    font-size: 0.7em;
    text-align: left;
    margin-top: 2em;
    a {
      color: #24292e;
      :hover {
        color: blue;
      }
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-left: 2em;

  .cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .repo-language-color {
    border: 1px solid var(--color-repo-language-color-border);
    border-radius: 50%;
    display: inline-block;
    height: 12px;
    position: relative;
    top: 1px;
    width: 12px;
  }
`;

const overviewSvg = (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    version="1.1"
    data-view-component="true"
    height="16"
    width="16"
    className="octicon octicon-book UnderlineNav-octicon hide-sm"
  >
    <path
      fillRule="evenodd"
      d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
    ></path>
  </svg>
);

const reposSvg = (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    version="1.1"
    data-view-component="true"
    height="16"
    width="16"
    className="octicon octicon-repo UnderlineNav-octicon hide-sm"
  >
    <path
      fillRule="evenodd"
      d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
    ></path>
  </svg>
);

const linkSvg = (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    version="1.1"
    data-view-component="true"
    height="16"
    width="16"
    className="octicon octicon-link"
  >
    <path
      fillRule="evenodd"
      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
    ></path>
  </svg>
);
