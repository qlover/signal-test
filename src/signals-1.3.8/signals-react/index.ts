import {
  signal,
  computed,
  batch,
  effect,
  Signal,
  type ReadonlySignal,
  untracked,
} from "../signals-core";
import {
  useSignal,
  useComputed,
  useSignalEffect,
  installAutoSignalTracking,
} from "./runtime"; // TODO: This duplicates runtime code between main and sub runtime packages

export {
  signal,
  computed,
  batch,
  effect,
  Signal,
  type ReadonlySignal,
  useSignal,
  useComputed,
  useSignalEffect,
  untracked,
};

installAutoSignalTracking();
