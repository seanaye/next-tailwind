import { NavBar } from './nav-bar'


export const Layout: React.FC = props => {
  return <div className="min-h-screen">
    <div className="container px-3 mx-auto">
      <NavBar />
      <div className="mx-auto mt-4">
        { props.children }
      </div>
    </div>
  </div>
}
