import * as React from "react";
import {withRouter} from "react-router-dom";

class CatalogItem extends React.Component {
    constructor(props) {
        super(props);
        this.item = props.getItemById(this.props.match.params.id)

    }

    render() {
        return (
            <div className={'catalog-item'}>
                <h1 className="catalog-item__title page_title">{this.item.name}</h1>
                <div className={'catalog-item__img-wrap'}><img alt="" src={'/images/image 1.png'}/></div>
                <div className={'catalog-item__desc'}>
                    <p>
                        Etiam feugiat lorem non metus. Curabitur suscipit suscipit tellus. Suspendisse feugiat. Nullam
                        dictum felis eu pede mollis pretium. Proin faucibus arcu quis ante.
                    </p><p>
                    In ut quam vitae odio lacinia tincidunt. Curabitur ullamcorper ultricies nisi. Proin pretium, leo ac
                    pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Fusce neque.
                    Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo.
                </p><p>
                    Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. In enim justo, rhoncus ut,
                    imperdiet a, venenatis vitae, justo. Cras id dui. Etiam vitae tortor. Proin magna.

                </p><p>
                    Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. In enim justo, rhoncus ut,
                    Cras ultricies mi eu turpis hendrerit fringilla. Aenean massa. Quisque ut nisi. Integer ante arcu,
                    accumsan a, consectetuer eget, posuere ut, mauris. Quisque id odio.

                </p><p>
                    Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. In enim justo, rhoncus ut,
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Ut tincidunt tincidunt erat.
                    Curabitur ullamcorper ultricies nisi. Ut varius tincidunt libero. Mauris turpis nunc, blandit et,
                    volutpat molestie, porta ut, ligula.

                </p><p>
                    Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. In enim justo, rhoncus ut,
                    Etiam feugiat lorem non metus. Curabitur suscipit suscipit tellus. Suspendisse feugiat. Nullam
                    dictum felis eu pede mollis pretium. Proin faucibus arcu quis ante.

                </p><p>
                    Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. In enim justo, rhoncus ut,
                    In ut quam vitae odio lacinia tincidunt. Curabitur ullamcorper ultricies nisi. Proin pretium, leo ac
                    pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Fusce neque.
                    Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo.

                </p><p>
                    Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. In enim justo, rhoncus ut,
                    Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. In enim justo, rhoncus ut,
                    imperdiet a, venenatis vitae, justo. Cras id dui. Etiam vitae tortor. Proin magna.

                </p><p>
                    Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. In enim justo, rhoncus ut,
                    Cras ultricies mi eu turpis hendrerit fringilla. Aenean massa. Quisque ut nisi. Integer ante arcu,
                    accumsan a, consectetuer eget, posuere ut, mauris. Quisque id odio.

                </p><p>
                    Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. In enim justo, rhoncus ut,
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Ut tincidunt tincidunt erat.
                    Curabitur ullamcorper ultricies nisi. Ut varius tincidunt libero. Mauris turpis nunc, blandit et,
                    volutpat molestie, porta ut, lig
                </p>
                </div>
            </div>
        );
    }

}

export default withRouter(CatalogItem)
