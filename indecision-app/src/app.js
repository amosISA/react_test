console.log("runing");

// JSX - JavaScript XML 
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
    </div>
);

ReactDOM.render(
    template, 
    document.getElementById('app')
);