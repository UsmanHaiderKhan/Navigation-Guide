import MainNavigation from "../components/MainNavigation";

function ErrorPage(){
    return (
        <>
          <MainNavigation/>
            <main>
                <h1>An Error occurred.</h1>
                <p>Cloud not find this page</p>
            </main>
        </>
    )
}
export default ErrorPage;
