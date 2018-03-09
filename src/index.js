/* browser entry point */

import { init as scopeInit } from './scope';

import interactions from './interactions';

import interactablePreventDefault from './interactablePreventDefault';

import interact from './interact';

import modifiersBase from './modifiers/base';
import snap from './modifiers/snap';
import restrict from './modifiers/restrict';
import * as snappers from './utils/snappers';
import inertia from './inertia';

import pointerEventsBase from './pointerEvents/base';
import holdRepeat from './pointerEvents/holdRepeat';
import interactableTargets from './pointerEvents/interactableTargets';

import base from './autoStart/base';
import hold from './autoStart/hold';
import dragAxis from './autoStart/dragAxis';

import gesture from './actions/gesture';
import resize from './actions/resize';
import drag from './actions/drag';
import drop from './actions/drop';

import snapSize from './modifiers/snapSize';
import restrictEdges from './modifiers/restrictEdges';
import restrictSize from './modifiers/restrictSize';

import autoScroll from './autoScroll';

export function init (window) {
  scopeInit(window);

  interact.use(interactions);
  interact.use(interactablePreventDefault);

  // modifiers
  interact.use(modifiersBase);
  interact.use(snap);
  interact.use(restrict);

  interact.snappers = snappers;
  interact.createSnapGrid = interact.snappers.grid;

  // inertia
  interact.use(inertia);

  // pointerEvents
  interact.use(pointerEventsBase);
  interact.use(holdRepeat);
  interact.use(interactableTargets);

  // autoStart hold
  interact.use(base);
  interact.use(hold);
  interact.use(dragAxis);

  // actions
  interact.use(gesture);
  interact.use(resize);
  interact.use(drag);
  interact.use(drop);

  // load these modifiers after resize is loaded
  interact.use(snapSize);
  interact.use(restrictEdges);
  interact.use(restrictSize);

  // autoScroll
  interact.use(autoScroll);

  return interact;
}
