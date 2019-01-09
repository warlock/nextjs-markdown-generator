import { Component } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export default class extends Component {
  static async getInitialProps() {
    const content = await require(`../docs/about.md`)
    return { content }
  }

  render() {
    return (
      <div>
        <ReactMarkdown source={this.props.content} />
        <Link href="/">
          <a>Go home</a>
        </Link>
      </div>
    )
  }
}
