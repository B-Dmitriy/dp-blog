import ReactDOM from "react-dom";
import App from "./01-app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./01-app/providers/ThemeProvider";

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider>
			<App/>
		</ThemeProvider>
	</BrowserRouter>, document.getElementById("root"));
