import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'


document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('current-user')
  const data = JSON.parse(node.getAttribute('data'))
  console.log(data)
  ReactDOM.render(
    <App user={data}/>,
    document.body.appendChild(document.createElement('div')),
  )
})
