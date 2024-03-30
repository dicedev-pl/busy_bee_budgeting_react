import React from "react";
import {Select} from "antd";

const {Option} = Select;

const useEnumToOption = (): { formattedAntOption: (e: any) => React.JSX.Element } => {

    const formattedAntOption: (e: any) => React.JSX.Element = (e: any) => {
        return (<Select defaultValue="" style={{width: 180}}>
                {Object.keys(e).filter(key => isNaN(Number(key))).map((key) => (
                    <Option value={key}>{key}</Option>
                ))}
            </Select>
        )
    }

    return {formattedAntOption}

}

export default useEnumToOption;