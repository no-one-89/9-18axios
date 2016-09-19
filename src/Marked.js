import React, { PropTypes } from 'react'
import marked from 'marked';
import { getBlog } from './utils/helpers'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});


class Marked extends React.Component {

  render () {
    let content = marked('# 这是h1标题')
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    )
  }
}

export default Marked;
