#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkActionsStack } from '../lib/cdk-actions-stack';

const app = new cdk.App();
new CdkActionsStack(app, 'CdkActionsStack');
