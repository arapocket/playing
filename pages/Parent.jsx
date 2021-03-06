import React, { useState, useRef, useCallback, useEffect, useMemo, TouchableOpacity } from "react";
import Head from 'next/head'
import { Child } from "./Child";
import { Provider, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

export const Parent = (props) => {
  const test = useSelector(state => state)
  const dist = useDispatch()

  const numbers = useSelector(state => state)
  console.log(numbers)


  const [num, setNum] = useState(0);
  const [names, setNames] = useState(["A"])
  const [numJaj, setNumJaj] = useState(0);

  const parentRenderRef = useRef(0);
  parentRenderRef.current = 1
  const handleClick = useCallback(() => {
    setNum(num + 1);
    setNames([...names, num + 1])
  }, [num, names]);
  const childFunction = () => {
    console.log("function from parent")
  }
  useEffect(() => {
    console.log("useEffect in parent called");
    console.log(num)
    return () => {
      console.log("parent unmounted");
    };
  }, [num]);
  const removeItem = (e) => {
    setNames([...names.slice(1)])
  }
  const renderPeople = useMemo(() => {
    return test.todos.map((x, i) => <button key={i + 1} onClick={removeItem}>{x}</button>
    )
  }, [test.todos])

  return (


    <div className="container">
      <div className="text-box">Renders: {parentRenderRef.current++}</div>
      <div className="text-box">Button Clicks: {num}</div>
      <button onClick={() => dist({ type: "ADD_TODO", payload: "hi" })}>Suck Me</button>
      <button onClick={() => dist({ type: "ADD_NAME", payload: "ARA" })}>Add Names</button>
      <button onClick={() => dist({ type: "numbers/addNumber", payload: 10 })}>Add numbers</button>
      {
        renderPeople
      }
      <Child parentVal={num}></Child>

      <style jsx>{`
        .text-box {
          width: 100px;
          height: 100px;
          background-color: blue;
          color: white;
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: pink;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};