import React, { ReactElement } from 'react';
import FatelErrorImage from '@/static/images/pale-fatal-error.png';
import Image from 'next/image';

import { Loader } from '../Loader';
import { Button } from '../Button';
import { isProduction } from '@/shared/helper';

interface WrapperProps {
    loading?: Boolean;
    error?: string;
    fallbackComponent?: ReactElement;
    onReset?: () => void;
    reportError?: (error: string, errorInfo: string) => void;
}
interface WrapperState {
    errorOcurred: boolean;
}

export class Wrapper extends React.Component<WrapperProps, WrapperState> {
    state = {
        errorOcurred: false,
    };
    componentDidCatch(error, errorInfo) {
        // logging error if it's on developmentMode
        if (!isProduction) console.log(error, errorInfo);
        // setting error state to true
        this.setState({ errorOcurred: true });
        // reporting error if reportError is provided
        if (this.props.reportError) this.props.reportError(error, errorInfo);
    }
    render() {
        // inititally content contains children
        let content = <>{this.props.children}</>;
        // if there is loading, content includes loader
        if (this.props.loading) {
            content = (
                <div className="py-5 w-full h-full flex justify-center">
                    <Loader />
                </div>
            );
        } else if (this.state.errorOcurred || this.props.error) {
            // if there is error ocurred or error received from parent, content is fallbackComponent or error-illustration
            if (this.props.fallbackComponent) content = this.props.fallbackComponent;
            else {
                content = (
                    <div className="w-full h-full flex justify-center items-center flex-col pb-3">
                        <Image
                            src={FatelErrorImage}
                            width={250}
                            height={200}
                            alt="Error Illustration"
                        />
                        <p className="text-primary-dark font-medium mb-2">
                            Something went wrong! Please try again later
                        </p>
                        {this.props.onReset && (
                            <Button onClick={this.props.onReset} variant="bordered" size="sm">
                                Try Again
                            </Button>
                        )}
                    </div>
                );
            }
        }
        return content;
    }
}
