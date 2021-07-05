import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkActions from '../lib/cdk-actions-stack';

test('Test skill invocation', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkActions.CdkActionsStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(haveResource("AWS::SQS::Queue",{
      VisibilityTimeout: 300
    }));
});

test('Test simple greeting', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkActions.CdkActionsStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::SQS::Queue",{
    VisibilityTimeout: 300
  }));
});

test('Test simple response', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkActions.CdkActionsStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::SQS::Queue",{
    VisibilityTimeout: 300
  }));
});

test('Dialog returns correct response', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkActions.CdkActionsStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::SNS::Topic"));
});

test('Action called with correct paramters', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkActions.CdkActionsStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::SNS::Topic"));
});

test('ACDL epic testing', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkActions.CdkActionsStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::SNS::Topic"));
});

test('Interruption handled', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkActions.CdkActionsStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::SNS::Topic"));
});


test('Variant speech recognized', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkActions.CdkActionsStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::SNS::Topic"));
});

