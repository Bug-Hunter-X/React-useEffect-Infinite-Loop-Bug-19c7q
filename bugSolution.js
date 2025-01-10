```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This effect only runs once on mount
    // and does not cause an infinite loop
    // Or if a different state variable is depended on 
    // it will run properly only when it changes 
    console.log('Mounted');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```