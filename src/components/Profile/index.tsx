import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import withDucks from '../../hoc/withDucks';
import { profileInjectible } from '../../sagas/Profile';
import { PROFILE_GET_INFO_EFFECT, PROFILE_ADD_USER_EFFECT } from '../../sagas/Profile/profile.actionTypes';

const Profile = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state.profileSaga);
  const { loading, profile } = selector;
  useEffect(() => {
    dispatch({ type: PROFILE_GET_INFO_EFFECT });
  }, []);
  return loading ? (
    'Loading.......'
  ) : (
    <>
      {profile.map((user: any) => (
        <div key={user.id}>
          <div>Id: {user.id}</div>
          <div>Name: {user.name} </div>
        </div>
      ))}

      <button type="submit" onClick={() => dispatch({ type: PROFILE_ADD_USER_EFFECT })}>
        Add User
      </button>
    </>
  );
};

const injectibleSagas = [profileInjectible] as any;

export default withDucks(injectibleSagas)(Profile);
