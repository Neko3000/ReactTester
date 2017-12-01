const { createElement }=React
const { render }=ReactDOM

const style = {
    background : "orange",
    color : "white",
    fontfamily: "verdana"
}

const title = React.createElement(
    'h1',
    {id:'title', className:'header', style:style },
    'Heelo'
)

ReactDOM.render(
    <h1 id="title" className="header" style={style}>Greeting</h1>,
    document.getElementById('react-container')
)

