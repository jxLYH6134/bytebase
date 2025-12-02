import './App.css'

// 静态资源
import logo from './assets/logo.svg'
import googleIcon from './assets/google.svg'
import githubIcon from './assets/github.svg'
import microsoftIcon from './assets/microsoft.svg'
import auth0Icon from './assets/auth0.svg'

// 跳转的占位处理,阻止默认提交。
function preventSubmit(e) {
    e.preventDefault()
}

export default function App() {
    return (// 页面容器：使用两列网格，填满视口高度
        <div className="page">
            {/* 左侧占位，移动端隐藏 */}
            <section className="page__left"></section>

            {/* 右侧登录，可交互内容 */}
            <section className="page__right">
                <div className="login-card" aria-label="Bytebase 登录卡片">
                    <header className="login-card__header">
                        <img className="login-card__brand" src={logo} alt="Bytebase"/>
                        <h1 className="login-card__title">欢迎</h1>
                        <p className="login-card__desc">登录 Bytebase 以继续使用 Bytebase Hub。</p>
                    </header>
                    <div className="login-card__body">
                        {/* 第三方登录按钮组 */}
                        <div className="oauth-group">
                            <button className="oauth-btn" type="button" aria-label="继续使用 Google 登录">
                                <img src={googleIcon} alt="Google" className="oauth-btn__icon"/>
                                <span>继续使用 Google</span>
                            </button>
                            <button className="oauth-btn" type="button" aria-label="继续使用 GitHub 登录">
                                <img src={githubIcon} alt="GitHub" className="oauth-btn__icon"/>
                                <span>继续使用 GitHub</span>
                            </button>
                            <button className="oauth-btn" type="button" aria-label="继续使用 Microsoft 登录">
                                <img src={microsoftIcon} alt="Microsoft" className="oauth-btn__icon"/>
                                <span>继续使用 Microsoft Account</span>
                            </button>
                        </div>

                        {/* 分隔符 */}
                        <div className="divider" aria-label="分隔符">
                            <span>或</span>
                        </div>

                        {/* 邮箱登录表单 */}
                        <form className="email-form" onSubmit={preventSubmit} noValidate>
                            <div className="email-form__field">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder=""
                                    required
                                    className="email-form__input"
                                />
                                <label htmlFor="email" className="email-form__label">电子邮件地址*</label>
                            </div>
                            <button type="submit" className="primary-btn">继续</button>
                        </form>

                        {/* 底部引导 */}
                        <p className="signup-hint">
                            <span>没有帐户？</span>
                            <a href="#" onClick={(e) => e.preventDefault()} aria-label="注册">注册</a>
                        </p>
                    </div>
                </div>
                <a href="https://auth0.com/?utm_source=lock&utm_campaign=badge&utm_medium=widget" target="_blank"
                   rel="noopener noreferrer" class="" aria-label="链接至 Auth0 网站">
                    <img src={auth0Icon} alt="auth0" className="oauth-btn__icon"/>
                </a>
            </section>
        </div>)
}
