import React from 'react';
import './Stories.css';

import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';
import {
  getReadableStories,
  getFetchError,
 } from '../selectors/story';

import Story from './Story';

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%',
  },
  author: {
    label: 'Author',
    width: '30%',
  },
  comments: {
    label: 'Comments',
    width: '10%',
  },
  points: {
    label: 'Points',
    width: '10%',
  },
  archive: {
    width: '10%',
  },
}

const Stories = ({ stories, error }) =>
  <div className='stories'>
    <div className='stories-header'>
      {Object.keys(COLUMNS).map(key =>
        <span
          key={key}
          style={{ width: COLUMNS[key].width }}
        >
          {COLUMNS[key].label}
        </span>
      )}
    </div>

    { error && <p className='error'>Something went wrong...</p> }
    {(stories || []).map(story =>
      <Story
        key={story.objectID}
        story={story}
        columns={COLUMNS}
      />
    )}
  </div>

const mapStateToProps = state => ({
  stories: getReadableStories(state),
  error: getFetchError(state),
})


export default connect(
  mapStateToProps,
)(Stories);
