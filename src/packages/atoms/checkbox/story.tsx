import React, { useState } from "react";

import Checkbox from "./";

export default {
  title: 'Components / Atoms / Checkbox',
  component: Checkbox,
};

export const story = () => {
    const [checked, setChecked] = useState(false);

    return (
        <Checkbox checked={checked} onClick={() => setChecked(prevState => !prevState)} />
    )
}