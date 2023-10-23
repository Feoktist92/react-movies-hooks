function Footer() {
    return (
        <footer className='page-footer light-blue lighten-2'>
            <div className='footer-copyright light-blue lighten-2'>
                © {new Date().getFullYear()} Copyright Text
                <a
                    className='grey-text text-lighten-4 right'
                    href='https://github.com/Feoktist92/react-movies'
                >
                    Repository
                </a>
            </div>
        </footer>
    );
}

export { Footer };
