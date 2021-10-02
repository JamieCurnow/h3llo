import { listen } from 'listhen'
import { createApp } from 'h3'

// import { route } from 'h3llo'
import { route } from '../src'

const app = createApp()

route(app)
listen(app)
