import { AllEffect, ForkEffect } from 'redux-saga/effects';

export type RootSaga = Generator<AllEffect<Generator<ForkEffect<never>, void, unknown>>, void, unknown>;

export type WatcherSaga = Generator<ForkEffect<never>, void, unknown>;
