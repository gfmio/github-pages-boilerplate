
import * as React from "react";
import { Flex } from "./components/flex";

export class App extends React.Component {
    public render() {
        return (
            <Flex.Container direction="column">
                <Flex.Child as="header">
                    <h3>Header</h3>
                </Flex.Child>
                <Flex.Child as="div" expand={true}>
                    <h1>Main</h1>
                </Flex.Child>
                <Flex.Child as="footer">
                    <h3>Footer</h3>
                </Flex.Child>
            </Flex.Container>
        );

        // return (
        //     <Router>
        //         <ScrollToTop>
        //             <Layout>
        //                 <Switch>
        //                     <Route exact={true} path="/" component={HomePage} />
        //                     <Route path="/about" component={AboutPage} />
        //                     <Route path="/terms-of-use" component={TermsOfUsePage} />
        //                     <Route path="/privacy-policy" component={PrivacyPolicyPage} />
        //                     <Route component={NotFoundPage} />
        //                 </Switch>
        //             </Layout>
        //         </ScrollToTop>
        //     </Router>
        // );
    }
}
