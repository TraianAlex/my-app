import React from 'react';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';
import Loader from '../../../common/components/Loader';
import SortButtons from './SortButtons';
import { useProfile } from '../store/useProfile';
import { ProfileCard } from './ProfileCard';
import { ProfileTable } from './ProfileTable';

export function Profile() {
  const { profile, loading, error, isCard, toggleView } = useProfile();

  const changeView = () => toggleView(isCard);

  return loading ? (
    <Loader />
  ) : error ? (
    <Alert variant="danger">
      <Alert.Heading>{error}</Alert.Heading>
    </Alert>
  ) : !error && profile.length > 0 ? (
    <>
      <div className="mt-4 mb-3 h5">
        Listing repositories for the user "{profile[0].owner.login}": found{' '}
        {profile.length} repositories
        <span
          className="clearfix float-right font-weight-light text-black-50"
          onClick={changeView}
        >
          Toggle view
        </span>
      </div>
      {isCard && <SortButtons />}
      {isCard ? (
        <CardsSection>
          {profile.map((row) => (
            <ProfileCard row={row} key={row.id} />
          ))}
        </CardsSection>
      ) : (
        <ProfileTable />
      )}
    </>
  ) : null;
}

export default Profile;

const CardsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  div:nth-child(odd) {
    flex: auto;
  }
  div:nth-child(even) {
    flex: auto;
  }
`;
