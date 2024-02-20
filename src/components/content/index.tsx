/**
 * @license
 * Copyright (c) 2014, 2023, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";
import { useState } from "preact/hooks"
import "ojs/ojbutton";
import { Remounter } from 'ojs/ojvcomponent-remounter';

export function Content() {
  const [state, setState] = useState(true);
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <button onClick={() => {
        setState(!state);
      }}>Change</button>
      <Remounter>
        <oj-button>
          {state && <span slot="startIcon" class="oj-ux-ico-avatar" />}
          Click Me!
        </oj-button>
      </Remounter>
    </div>
  );
};
