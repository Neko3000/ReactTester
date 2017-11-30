const { createElement }=React
const { render }=ReactDOM

const title = React.createElement(
    'h1',
    {id:'title', className:'header' },
    'Heelo'
)

ReactDOM.render(
    title,
    document.getElementById('react-container')
)


