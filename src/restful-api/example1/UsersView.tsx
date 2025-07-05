import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

export const UsersView = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  const [message, setMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  //   useEffect(() => {
  //     setLoading(true);
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then((response) => {
  //         if (!response.ok) throw new Error('Failed to get users data.');
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setUsers(data);
  //       })
  //       .catch((e) => {
  //         setError(e);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }, []);

  useEffect(() => {
    setLoading(true);
    const token = 'aaa';
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to get users data.');
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id: number) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) throw new Error('');
        return response.json();
      })
      .then((_) => {
        setMessage('Item deleted successfully:');
        setUsers((values) => values.filter((item) => item.id !== id));
      })
      .catch((e) => {
        setError('Delete failed');
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, data]);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setName('');
        setEmail('');
        setLoading(false);
      });
  };

  const handleUpdate = (id: number) => {
    const user = users.find((user) => user.id === id);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...user, name: 'dummy' }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('');
        return response.json();
      })
      .then((data) => {
        setMessage('User updated successfully:');
        setUsers((values) => values.map((item) => (item.id === id ? data : item)));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="App">
      <h1>User list</h1>
      <p style={{ color: 'red' }}>{message}</p>
      <div>
        <span>Name:</span>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <span>email:</span>
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>DELETE</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleUpdate(user.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </div>
  );
};
