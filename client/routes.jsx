import React from 'react';
import { mount } from 'react-mounter';
import { Meteor } from 'meteor/meteor';

import { MainLayout } from './layouts/MainLayout.jsx';
import Home from '../imports/ui/components/Home.jsx';
import Login from '../imports/ui/components/Login.jsx';
import LoginComplete from '../imports/ui/components/LoginComplete.jsx';
import RegisterComplete from '../imports/ui/components/RegisterComplete.jsx';

FlowRouter.route('/',{
  action(){
    mount(MainLayout,{
      content:(<Login/>),
    });
  }
});

FlowRouter.route('/:username',{
  action(){
    mount(MainLayout,{
      content:(<RegisterComplete/>),
    });
  }
});
