import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { toast } from 'react-toastify';

export const CardList = ({ profiles }) => (
  <>
    {profiles.map((profile) => (
      <CardComp key={profile.id} {...profile} />
    ))}
  </>
);

const CardComp = ({ login, avatar_url, name, company, bio }) => {
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
        <img alt="user" src={avatar_url} style={{ width: '7em' }} />
        <div className="font-weight-bold mt-1">{name}</div>
        <div className="company">{company}</div>
        <div className="bio">{bio}</div>
      </LeftSection>
      <RightSection>
        <div className="mb-2">Repos</div>
        <div className="cards">
          {repos.slice(0, 9).map((repo) => (
            <Card
              style={{
                width: '12.5rem',
                minHeight: '120px',
                fontSize: '0.7rem',
              }}
              className="m-3 shadow"
              key={repo.id}
            >
              <Card.Body>
                <Card.Title style={{ fontSize: '0.9rem' }}>
                  {repo.name}
                </Card.Title>
                <Card.Text>
                  <span
                    className="repo-language-color"
                    style={{ marginRight: '0.7em', backgroundColor: '#f1e05a' }}
                  ></span>
                  {repo.language ? repo.language : '-'}
                </Card.Text>
                <Card.Link href={repo.url}>{repo.name}</Card.Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </RightSection>
    </CardSection>
  );
};

const CardSection = styled.div`
  display: flex;
  margin-top: 1em;
  font-size: 0.8em;
  border: 1px solid #ccc;
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
    max-width: 9rem;
    font-size: 0.7em;
    text-align: left;
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
