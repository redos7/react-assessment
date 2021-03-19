import React from 'react';

import { Row, UserInfo, Users } from '@components/styled-components/UserList';
import useUserListData from '@hooks/useUserListData';

const UserList = () => {
  const { data, setFilter } = useUserListData();

  return (
    <div>
      <div>
        Filter:
        <input
          type="text"
          onChange={({ target: { value } }) => setFilter({ username: value || null })}
          placeholder="Enter username"
        />
      </div>
      <Users>
        {data.map((user) => (
          <Row key={user.id}>
            <UserInfo>
              <span>{`Name: ${user.name}`}</span>
              <span>{`Username: ${user.username}`}</span>
            </UserInfo>
            <div>
              <div>
                <span>{user.address.street}</span>
                <span>{user.address.suite}</span>
                <span>{user.address.city}</span>
                <span>{user.address.zipcode}</span>
              </div>
              <div>
                <span>{user.email}</span>
                <span>{user.phone}</span>
              </div>
            </div>
          </Row>
        ))}
      </Users>
    </div>
  );
};

export default React.memo(UserList);
