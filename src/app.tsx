import styles from './app.less'
type CurrentUser = {
    type:string
}

export async function getInitialState():Promise<{
    currentUser:CurrentUser
}>{

    return {
        currentUser:{type:'admin'}
    }
}

export async function layout(){
    return {
        menuDataRender:() => [
            {
                path: '/',
                name: 'Home',
              },
              {
                path: '/about',
                name: 'About',
                children: [
                  { path: '/about/company', name: 'Company' },
                  { path: '/about/investors', name: 'Investors' },
                ],
            },
        ],
        logo:() => {
            return <img className={styles.logo_img} src={require('./imgs/logo1.png')} />
        },
        footerRender: false,
    }
}