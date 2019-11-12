import * as React from "react";
import {withRouter} from "react-router-dom";

class CatalogItem extends React.Component
{
    render() {
        console.log(this.props);
        return (
            <div>
                Catalog Item {this.props.match.params.id}
            </div>
        );
    }

}

export default withRouter(CatalogItem)
