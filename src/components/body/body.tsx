import { Layout } from '@ui-kitten/components';
import React, { ReactElement } from 'react';

interface BodyProps {
    children: ReactElement | Array<ReactElement>,
    style?: any
}

const Body = ({ children, style }: BodyProps) => {
    return (
        <Layout level={'4'} style={{
            marginTop: 10,
            marginHorizontal: 5,
            height: '100%',
            borderRadius: 10,
            overflow: 'hidden',
            ...style
        }}>
            {children}
        </Layout>
    )
}

export default Body;