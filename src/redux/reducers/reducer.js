/* eslint-disable import/prefer-default-export */

import { combineReducers } from 'redux';

import { reducerCheckboxes } from './reducerCheckboxes';
import { reducerData } from './reducerData';
import { sortReducer } from './sortReducer';

export const reducer = combineReducers({ checkboxes: reducerCheckboxes, tickets: reducerData, sort: sortReducer });
