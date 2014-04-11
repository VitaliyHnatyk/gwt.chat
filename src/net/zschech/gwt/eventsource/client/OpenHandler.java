/*
 * Copyright 2010 Richard Zschech.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package net.zschech.gwt.eventsource.client;

/**
 * A open callback for an {@Link EventSource} object.
 */
public interface OpenHandler {

  /**
   * This is called whenever the state of the EventSource changes. See
   * {@link net.zschech.gwt.eventsource.client.EventSource#setOnOpen}.
   * 
   * @param eventSource the object which has been opened.
   */
  public void onOpen(EventSource eventSource);
}
