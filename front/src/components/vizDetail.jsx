import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class VizDetail extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className ="col-sm-12">
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2" >
                                    Author
                                </Typography>
                                <Typography variant="h6" component="h2">
                                    URI
                                </Typography>
                                <Typography color="textSecondary">
                                    {this.props.authorUri}
                                </Typography>
                                <Typography variant="h6" component="h2">
                                    Name
                                </Typography>
                                <Typography color="textSecondary">
                                    {this.props.authorName}
                                </Typography>
                                <Typography variant="h6" component="h2">
                                    Institution
                                </Typography>
                                <Typography color="textSecondary">
                                    {this.props.authorInstitution}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default VizDetail;