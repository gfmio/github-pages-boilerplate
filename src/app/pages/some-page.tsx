/**
 * @module pages/some-page
 */
// tslint:disable:max-line-length

import * as React from "react";
import { Layout } from "../components";
import { generateTitle } from "../helpers";

export class SomePage extends React.Component {
    public componentDidMount() {
        document.title = generateTitle("Some page");
    }

    public render() {
        return (
            <Layout>
                <h1>Some Page</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo rutrum posuere. In hac habitasse platea dictumst. Nulla eu dictum nulla. Proin maximus sapien eget elit gravida malesuada. Nullam eu massa nisl. Curabitur aliquam enim quis erat placerat, fermentum volutpat massa eleifend. Vestibulum dolor ipsum, sodales eu risus quis, sodales luctus nulla. Donec viverra eu turpis in egestas. Integer lacinia ante in ante rhoncus, eu mattis ipsum dignissim. Integer nisl mi, tincidunt non leo vitae, porta dignissim sapien.
                </p>
                <p>
                    Maecenas velit augue, laoreet vel ornare sit amet, feugiat ut lorem. Proin sagittis felis in imperdiet lobortis. Mauris sit amet libero tincidunt, dapibus nisi egestas, viverra nibh. Etiam sit amet consequat ipsum, eu convallis leo. Aenean accumsan lacus in mattis auctor. Cras a tincidunt dolor. Sed dignissim diam ac nisl blandit, nec semper dui laoreet. Vestibulum pretium eros et ultrices fermentum. Curabitur a metus sem. Donec vitae purus pharetra, egestas magna ut, suscipit ipsum. Duis suscipit mattis imperdiet. Donec eget mauris tellus. Aenean quis ante arcu.
                </p>
            </Layout>
        );
    }
}

export default SomePage;
