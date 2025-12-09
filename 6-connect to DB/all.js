import React, { useState } from "react";

/* ============================================================
    1) GET EXAMPLES COMPONENTS 
============================================================ */

// -------- Example 1 --------
function GetExample1() {
  const [data, setData] = useState(null);

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    setData(await res.json());
  }

  return (
    <div className="box">
      <h3>GET Example 1</h3>
      <button onClick={fetchData}>Load Post 1</button>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}




















// -------- Example 2 --------
function GetExample2() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    setData(await res.json());
  }

  return (
    <div className="box">
      <h3>GET Example 2</h3>
      <button onClick={fetchData}>Load Users</button>
      <ul>
        {data.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

// -------- Example 3 --------
function GetExample3() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=5"
    );
    setData(await res.json());
  }

  return (
    <div className="box">
      <h3>GET Example 3</h3>
      <button onClick={fetchData}>Load 5 Comments</button>
      <ul>
        {data.map((c) => (
          <li key={c.id}>{c.email}</li>
        ))}
      </ul>
    </div>
  );
}

// -------- Example 4 --------
function GetExample4() {
  const [repo, setRepo] = useState(null);

  async function fetchRepo() {
    const res = await fetch("https://api.github.com/repos/facebook/react");
    setRepo(await res.json());
  }

  return (
    <div className="box">
      <h3>GET Example 4</h3>
      <button onClick={fetchRepo}>Load React Repo Info</button>
      {repo && (
        <p>
          {repo.full_name} ⭐ {repo.stargazers_count}
        </p>
      )}
    </div>
  );
}

// -------- Example 5 --------
function GetExample5() {
  const [todos, setTodos] = useState([]);

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    setTodos(await res.json());
  }

  return (
    <div className="box">
      <h3>GET Example 5</h3>
      <button onClick={fetchData}>Load Todos (3)</button>
      <ul>{todos.slice(0, 3).map((t) => <li key={t.id}>{t.title}</li>)}</ul>
    </div>
  );
}

/* ============================================================
    2) POST EXAMPLES COMPONENTS 
============================================================ */

// -------- Example 6 --------
function PostExample1() {
  const [title, setTitle] = useState("");
  const [resData, setResData] = useState(null);

  async function sendData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setResData(await res.json());
  }

  return (
    <div className="box">
      <h3>POST Example 1</h3>
      <input
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={sendData}>Send</button>
      <pre>{resData && JSON.stringify(resData, null, 2)}</pre>
    </div>
  );
}

// -------- Example 7 --------
function PostExample2() {
  const [email, setEmail] = useState("");
  const [resData, setResData] = useState(null);

  async function sendData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setResData(await res.json());
  }

  return (
    <div className="box">
      <h3>POST Example 2</h3>
      <input
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendData}>Send</button>
      <pre>{resData && JSON.stringify(resData, null, 2)}</pre>
    </div>
  );
}

// -------- Example 8 --------
function PostExample3() {
  const [name, setName] = useState("");
  const [out, setOut] = useState(null);

  async function sendData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    setOut(await res.json());
  }

  return (
    <div className="box">
      <h3>POST Example 3</h3>
      <input
        placeholder="user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={sendData}>Send</button>
      <pre>{out && JSON.stringify(out, null, 2)}</pre>
    </div>
  );
}

// -------- Example 9 --------
function PostExample4() {
  const [title, setTitle] = useState("");
  const [out, setOut] = useState(null);

  async function sendData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setOut(await res.json());
  }

  return (
    <div className="box">
      <h3>POST Example 4</h3>
      <input
        placeholder="todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={sendData}>Add</button>
      <pre>{out && JSON.stringify(out, null, 2)}</pre>
    </div>
  );
}

// -------- Example 10 --------
function PostExample5() {
  const [msg, setMsg] = useState("");
  const [out, setOut] = useState(null);

  async function sendData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer test_123",
      },
      body: JSON.stringify({ msg }),
    });
    setOut(await res.json());
  }

  return (
    <div className="box">
      <h3>POST Example 5</h3>
      <input
        placeholder="message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button onClick={sendData}>Send</button>
      <pre>{out && JSON.stringify(out, null, 2)}</pre>
    </div>
  );
}

/* ============================================================
    3) DELETE EXAMPLES COMPONENTS 
============================================================ */

function DeleteExample({ id }) {
  const [status, setStatus] = useState(null);

  async function handleDelete() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { method: "DELETE" }
    );
    setStatus(res.status);
  }

  return (
    <div className="box">
      <h3>DELETE Example ({id})</h3>
      <button onClick={handleDelete}>Delete</button>
      <p>Status: {status}</p>
    </div>
  );
}

/* ============================================================
                    MAIN APP
============================================================ */

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>React Fetch / POST / DELETE Examples</h1>

      {/* GET */}
      <GetExample1 />
      <GetExample2 />
      <GetExample3 />
      <GetExample4 />
      <GetExample5 />

      {/* POST */}
      <PostExample1 />
      <PostExample2 />
      <PostExample3 />
      <PostExample4 />
      <PostExample5 />

      {/* DELETE */}
      <DeleteExample id={1} />
      <DeleteExample id={5} />
      <DeleteExample id={3} />
      <DeleteExample id={10} />
      <DeleteExample id={50} />
    </div>
  );
}







// UseEffect with fetch