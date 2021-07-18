import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './card-list.scss';
import { CardRepos } from './card-repos';
import {
  companySvg,
  linkSvg,
  overviewSvg,
  peopleSvg,
  projectsSvg,
  reposSvg,
  starSvg,
} from '../../common/utils/svg';

export const CardList = ({ profiles }) => (
  <>
    {profiles.map((profile) => (
      <CardComp key={profile.id} {...profile} />
    ))}
  </>
);

const CardComp = ({
  login,
  avatar_url,
  name,
  company,
  bio,
  blog,
  followers,
  following,
  public_gists,
  public_repos,
}) => {
  const [repos, setRepos] = useState([]);
  const [repoCard, setRepoCard] = useState(true);

  const fetchProfile = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${login}/repos`,
      );
      setRepos(data);
    } catch (err) {
      toast('Error');
    }
  }, [login]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  console.log(repoCard);

  return (
    <CardSection>
      <LeftSection>
        <img alt="user" src={avatar_url} style={{ width: '9em' }} />
        <div className="font-weight-bold mt-1">{name}</div>
        <div className="login">{login}</div>
        <div className="bio">{bio}</div>
        <div className="follow">
          {peopleSvg} <b>{followers}</b> followers - <b>{following}</b>{' '}
          following - {starSvg}
        </div>
        <div className="company">
          {companySvg} {company}
        </div>
        {blog && (
          <div className="blog">
            {linkSvg} <a href={blog}>{blog}</a>
          </div>
        )}
        <div className="public">
          {projectsSvg} public gists: <b>{public_gists}</b>
        </div>
        <div className="public">
          {projectsSvg} public repos: <b>{public_repos}</b>
        </div>
      </LeftSection>
      <RightSection>
        <Tabs className="git-cards">
          <TabList className="d-flex">
            <Tab onClick={() => setRepoCard(true)}>{overviewSvg} Overview</Tab>
            <Tab onClick={() => setRepoCard(false)}>
              {reposSvg} Repositories{' '}
              <span className="counter">{repos.length}</span>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="cards">
              {repos.slice(0, 6).map((repo) => (
                <CardRepos repo={repo} repoCard={repoCard} key={repo.id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="cards">
              {repos.map((repo) => (
                <CardRepos repo={repo} repoCard={repoCard} key={repo.id} />
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

  .login {
    font-size: 0.9em;
    color: blue;
    margin-bottom: 1em;
  }
  .bio {
    max-width: 11rem;
    font-size: 0.7em;
    text-align: left;
  }
  .follow {
    margin-top: 2em;
    max-width: 11rem;
    font-size: 0.6em;
    text-align: left;
  }
  .company {
    margin-top: 2em;
    max-width: 11rem;
  }
  .blog {
    max-width: 10rem;
    margin-bottom: 2em;
    overflow: auto;
  }
  .public {
    max-width: 11rem;
  }
  .company,
  .blog,
  .public {
    font-size: 0.7em;
    text-align: left;
    a {
      color: #24292e;
      :hover {
        color: blue;
      }
    }
  }
`;

const RightSection = styled.div`
  --color-repo-language-color-border: rgba(27,31,35,0.1);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-left: 2em;
  text-align: left;

  .cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    div:nth-child(odd) {
      flex: auto;
    }
    div:nth-child(even) {
      flex: auto;
    }
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
