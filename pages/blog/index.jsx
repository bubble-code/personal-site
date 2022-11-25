
import Link from "next/link"
import { Layout } from "../../components/Layout"

const Index = () => {
    return (
        <Layout>
            <h1>Blog</h1>
            <h3>
                <Link href="/">Go Back</Link>
            </h3>
        </Layout>
    )
}

export default Index