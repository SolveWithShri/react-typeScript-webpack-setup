import React from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';

const Users = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active';

  const onClick = (id: string) => {
    // navigate('order-summary');
    navigate(id, { replace: true });
  };

  return (
    <>
      <div>Users</div>
      <nav>
        <button onClick={() => onClick('1')}>User 1</button>
        <button onClick={() => onClick('2')}>User 2</button>
        <button onClick={() => onClick('3')}>User 3</button>
        <button onClick={() => onClick('admin')}>Admin</button>
      </nav>
      <Outlet />

      <hr />

      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Users</button>
      </div>

      <div>
        {showActiveUsers ? 'Showing Active Users' : 'Showing All users'}
      </div>
    </>
  );
};

export default Users;
