import React from 'react';

class SearchItem extends React.Component {

    get64ImageUrl() {
        /** Default Image */
        let image64 = "http://placekitten.com/64/64"
        if (image64) {
            let image64Obj = this.props.item.images.filter((images) => {
                return images.height == 64 && images.width == 64;
            });
            if (image64Obj && image64Obj.length > 0) {
                image64 = image64Obj[0].url;
            }
        }
        return image64;
    }

    render() {
        return (
            <li><img className="thumb" src={this.get64ImageUrl() }/> { this.props.item.name }</li>
        );
    }
}

module.exports = SearchItem;