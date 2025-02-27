import { combineReducers } from '@reduxjs/toolkit'

import postsReducer from './posts'
import postReducer from './post'
import commentsReducer from './comments'

const rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
    comments: commentsReducer,
})

export default rootReducer
