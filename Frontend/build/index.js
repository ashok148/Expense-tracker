var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_react_redux = require("react-redux");

// app/redux/store.js
var import_toolkit = require("@reduxjs/toolkit");

// app/redux/authSlice.js
var { createReducer } = require("@reduxjs/toolkit"), initialState = {
  isAuthenticated: !1
}, customReducer = createReducer(initialState, {
  login: (state) => {
    state.isAuthenticated = !0;
  },
  logout: (state) => {
    localStorage.removeItem("id"), state.isAuthenticated = !1;
  }
});

// app/redux/store.js
var store = (0, import_toolkit.configureStore)({
  reducer: customReducer
}), store_default = store;

// app/root.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Expense Tracker Web Application",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_redux.Provider, {
    store: store_default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", {
      lang: "en",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", {
              charSet: "utf-8"
            }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 24,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", {
              name: "viewport",
              content: "width=device-width,initial-scale=1"
            }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 25,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 26,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 27,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 23,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 30,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 31,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 32,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 33,
              columnNumber: 54
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/password/reset/$id/$reset.jsx
var reset_exports = {};
__export(reset_exports, {
  action: () => action,
  changePassword: () => changePassword,
  default: () => reset_default,
  links: () => links
});
var import_antd = require("antd"), import_icons = require("@ant-design/icons"), import_react3 = require("@remix-run/react"), import_react4 = require("react"), import_axios = __toESM(require("axios"));

// app/style.css
var style_default = "/build/_assets/style-LWX4KRUU.css";

// app/routes/validation.jsx
var validation_exports = {};
__export(validation_exports, {
  validateComfirmPassword: () => validateComfirmPassword,
  validateEmail: () => validateEmail,
  validatePassword: () => validatePassword,
  validatefirst: () => validatefirst,
  validatelast: () => validatelast
});
var validatefirst = (firstname) => {
  if (firstname) {
    if (typeof firstname != "string" || firstname.length < 3)
      return "First Name must be 3 characters";
  } else
    return "firstName is required";
}, validatelast = (lastname) => {
  if (lastname) {
    if (typeof lastname != "string" || lastname.length < 3)
      return "Last Name must be 3 characters";
  } else
    return "lastname is required";
}, validateEmail = (email) => {
  if (email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Invalid Email Address";
  } else
    return "Email is Required";
}, validatePassword = (password) => {
  if (password) {
    if (typeof password != "string" || password.length < 6)
      return "Passwords must be at least 6 characters long";
    if (password.length > 0 && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password))
      return "Minimum one lowercase, uppercase, number and special character required";
  } else
    return "Password is required";
}, validateComfirmPassword = (password, cpassword) => {
  if (cpassword) {
    if (password !== cpassword)
      return "Password does not match";
  } else
    return "Confirm Password is required";
};

// app/routes/password/reset/$id/$reset.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), { Title, Paragraph, Text } = import_antd.Typography;
async function changePassword(id, token, password, cpassword) {
  try {
    let config = { headers: { "Content-Type": "application/json" } }, res = await import_axios.default.post(
      `http://localhost:4000/api/user/password/reset/${id}/${token}`,
      {
        password,
        cpassword,
        config
      }
    );
    return { mydata: await (res == null ? void 0 : res.data) };
  } catch (error) {
    return { error };
  }
}
async function action({ request, params }) {
  let id = params.id, token = params.reset, form = await request.formData(), password = form.get("password"), cpassword = form.get("cpassword"), formErrors = {
    password: validatePassword(password),
    cpassword: validateComfirmPassword(password, cpassword)
  };
  if (Object.values(formErrors).some(Boolean))
    return {
      formErrors
    };
  switch (request.method) {
    case "POST":
      return await changePassword(id, token, password, cpassword);
    default:
      return "invalid reset password data";
  }
}
function links() {
  return [{ rel: "stylesheet", href: style_default }];
}
function Reset() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let actionData = (0, import_react3.useActionData)(), navigate = (0, import_react3.useNavigate)(), [inputs, setInputs] = (0, import_react4.useState)({
    password: "",
    cpassword: ""
  }), handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return (0, import_react4.useEffect)(() => {
    var _a2;
    (_a2 = actionData == null ? void 0 : actionData.mydata) != null && _a2.message && navigate("/login");
  }, [(_a = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _a.message]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {
    className: "main-user",
    children: [
      (_b = actionData == null ? void 0 : actionData.mydata) != null && _b.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_antd.Alert, {
        message: (_c = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _c.message,
        type: "success"
      }, void 0, !1, {
        fileName: "app/routes/password/reset/$id/$reset.jsx",
        lineNumber: 80,
        columnNumber: 11
      }, this) : null,
      (_d = actionData == null ? void 0 : actionData.error) != null && _d.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_antd.Alert, {
        message: "Fail to reset password!",
        type: "error"
      }, void 0, !1, {
        fileName: "app/routes/password/reset/$id/$reset.jsx",
        lineNumber: 83,
        columnNumber: 11
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {
        className: "main-user-component",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {
          className: "main-component",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_antd.Avatar, {
              style: {
                backgroundColor: "#9c27b0",
                verticalAlign: "middle"
              },
              size: "large",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons.UserOutlined, {
                size: "large"
              }, void 0, !1, {
                fileName: "app/routes/password/reset/$id/$reset.jsx",
                lineNumber: 95,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/password/reset/$id/$reset.jsx",
              lineNumber: 88,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Title, {
              level: 2,
              style: { marginTop: "10px" },
              children: "Reset Your Password"
            }, void 0, !1, {
              fileName: "app/routes/password/reset/$id/$reset.jsx",
              lineNumber: 97,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Form, {
              method: "POST",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_antd.Row, {
                gutter: [16, 16],
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_antd.Col, {
                    span: 24,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_antd.Input, {
                        name: "password",
                        placeholder: "Enter New Password",
                        required: !0,
                        size: "large",
                        type: "password",
                        value: inputs.password,
                        onChange: handleChange
                      }, void 0, !1, {
                        fileName: "app/routes/password/reset/$id/$reset.jsx",
                        lineNumber: 103,
                        columnNumber: 13
                      }, this),
                      (_e = actionData == null ? void 0 : actionData.formErrors) != null && _e.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, {
                        type: "danger",
                        children: (_f = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _f.password
                      }, void 0, !1, {
                        fileName: "app/routes/password/reset/$id/$reset.jsx",
                        lineNumber: 113,
                        columnNumber: 19
                      }, this) : null
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/password/reset/$id/$reset.jsx",
                    lineNumber: 102,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_antd.Col, {
                    span: 24,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_antd.Input, {
                        name: "cpassword",
                        placeholder: "Confirm New Password",
                        required: !0,
                        type: "password",
                        size: "large",
                        value: inputs.cpassword,
                        onChange: handleChange
                      }, void 0, !1, {
                        fileName: "app/routes/password/reset/$id/$reset.jsx",
                        lineNumber: 119,
                        columnNumber: 15
                      }, this),
                      (_g = actionData == null ? void 0 : actionData.formErrors) != null && _g.cpassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, {
                        type: "danger",
                        children: (_h = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _h.cpassword
                      }, void 0, !1, {
                        fileName: "app/routes/password/reset/$id/$reset.jsx",
                        lineNumber: 129,
                        columnNumber: 19
                      }, this) : null
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/password/reset/$id/$reset.jsx",
                    lineNumber: 118,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_antd.Col, {
                    span: 24,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_antd.Button, {
                      type: "primary",
                      htmlType: "submit",
                      size: "large",
                      children: "Update Password"
                    }, void 0, !1, {
                      fileName: "app/routes/password/reset/$id/$reset.jsx",
                      lineNumber: 135,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/password/reset/$id/$reset.jsx",
                    lineNumber: 134,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/password/reset/$id/$reset.jsx",
                lineNumber: 101,
                columnNumber: 10
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/password/reset/$id/$reset.jsx",
              lineNumber: 100,
              columnNumber: 10
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/password/reset/$id/$reset.jsx",
          lineNumber: 87,
          columnNumber: 7
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/password/reset/$id/$reset.jsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/password/reset/$id/$reset.jsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
var reset_default = Reset;

// app/routes/user/$transaction.jsx
var transaction_exports = {};
__export(transaction_exports, {
  action: () => action2,
  default: () => transaction_default,
  deleteExpense: () => deleteExpense,
  getExpenseList: () => getExpenseList,
  loader: () => loader
});
var import_react8 = require("react"), import_antd4 = require("antd"), import_icons4 = require("@ant-design/icons");

// app/routes/layouts/home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => home_default
});
var import_react5 = require("react"), import_icons2 = require("@ant-design/icons"), import_antd2 = require("antd"), import_react_redux2 = require("react-redux"), import_react6 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), { Header, Content, Footer, Sider } = import_antd2.Layout, navItems = [
  {
    label: "Dashboard",
    key: "/user/dashboard",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_icons2.HomeOutlined, {}, void 0, !1, {
      fileName: "app/routes/layouts/home.jsx",
      lineNumber: 26,
      columnNumber: 11
    }, this)
  },
  {
    label: "Category",
    key: "/user/categories",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_icons2.FileOutlined, {}, void 0, !1, {
      fileName: "app/routes/layouts/home.jsx",
      lineNumber: 31,
      columnNumber: 11
    }, this)
  },
  {
    label: "Transaction",
    key: "/user/transaction",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_icons2.TransactionOutlined, {}, void 0, !1, {
      fileName: "app/routes/layouts/home.jsx",
      lineNumber: 36,
      columnNumber: 11
    }, this)
  },
  {
    label: "Reports",
    key: "/user/reports",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_icons2.DesktopOutlined, {}, void 0, !1, {
      fileName: "app/routes/layouts/home.jsx",
      lineNumber: 41,
      columnNumber: 11
    }, this)
  },
  {
    label: "Settings",
    key: "/user/setting",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_icons2.SettingOutlined, {}, void 0, !1, {
      fileName: "app/routes/layouts/home.jsx",
      lineNumber: 46,
      columnNumber: 11
    }, this)
  }
], MainLayout = ({ children }) => {
  let dispatch = (0, import_react_redux2.useDispatch)(), navigate = (0, import_react6.useNavigate)(), [collapsed, setCollapsed] = (0, import_react5.useState)(!1), Logout = () => {
    localStorage.clear(), dispatch({ type: "logout" }), navigate("/login");
  }, handleMenuItem = (key) => {
    navigate(key);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Layout, {
    style: {
      minHeight: "100vh"
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Sider, {
        collapsible: !0,
        collapsed,
        onCollapse: (value) => setCollapsed(value),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {
            style: {
              height: 32,
              margin: 16,
              background: "rgba(255, 255, 255, 0.2)",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", {
              children: "\u03A3\u01AC"
            }, void 0, !1, {
              fileName: "app/routes/layouts/home.jsx",
              lineNumber: 96,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/layouts/home.jsx",
            lineNumber: 85,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Menu, {
            theme: "dark",
            onClick: (item) => handleMenuItem(item == null ? void 0 : item.key),
            mode: "inline",
            items: navItems
          }, void 0, !1, {
            fileName: "app/routes/layouts/home.jsx",
            lineNumber: 98,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/layouts/home.jsx",
        lineNumber: 80,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Layout, {
        className: "site-layout",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header, {
            style: {
              padding: 0,
              background: "#002140",
              boxShadow: "0px 4px 8px rgb(153 170 255 / 30%)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {
                style: { color: "#fff", marginLeft: "20px", fontSize: "1.5rem" },
                children: "\u{1D53C}\u{1D54F}\u2119\u{1D53C}\u2115\u{1D54A}\u{1D53C} \u{1D54B}\u211D\u{1D538}\u2102\u{1D542}"
              }, void 0, !1, {
                fileName: "app/routes/layouts/home.jsx",
                lineNumber: 118,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Popover, {
                placement: "bottomRight",
                content: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Button, {
                      block: !0,
                      type: "text",
                      children: "My Profile"
                    }, void 0, !1, {
                      fileName: "app/routes/layouts/home.jsx",
                      lineNumber: 65,
                      columnNumber: 7
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Divider, {
                      style: { margin: "4px 0" }
                    }, void 0, !1, {
                      fileName: "app/routes/layouts/home.jsx",
                      lineNumber: 68,
                      columnNumber: 7
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Button, {
                      block: !0,
                      type: "text",
                      onClick: Logout,
                      children: "Log out"
                    }, void 0, !1, {
                      fileName: "app/routes/layouts/home.jsx",
                      lineNumber: 69,
                      columnNumber: 7
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/layouts/home.jsx",
                  lineNumber: 64,
                  columnNumber: 5
                }, this),
                trigger: "click",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Avatar, {
                  style: { background: "#ffffff33", right: "20px" },
                  size: 44,
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_icons2.UserOutlined, {}, void 0, !1, {
                    fileName: "app/routes/layouts/home.jsx",
                    lineNumber: 123,
                    columnNumber: 21
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/layouts/home.jsx",
                  lineNumber: 120,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/layouts/home.jsx",
                lineNumber: 119,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/layouts/home.jsx",
            lineNumber: 107,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Content, {
            style: {
              margin: "0 16px"
            },
            children
          }, void 0, !1, {
            fileName: "app/routes/layouts/home.jsx",
            lineNumber: 127,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, {
            style: {
              textAlign: "center"
            },
            children: "Expense Tracker \xA92022 Created by AS."
          }, void 0, !1, {
            fileName: "app/routes/layouts/home.jsx",
            lineNumber: 134,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/layouts/home.jsx",
        lineNumber: 106,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/layouts/home.jsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}, home_default = MainLayout;

// app/routes/user/$transaction.jsx
var import_axios2 = __toESM(require("axios")), import_react9 = require("@remix-run/react");

// app/routes/user/search.jsx
var search_exports = {};
__export(search_exports, {
  SearchBar: () => SearchBar
});
var import_react7 = require("react"), import_icons3 = require("@ant-design/icons"), import_antd3 = require("antd"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), { Search } = import_antd3.Input;
function SearchBar({ expenses }) {
  console.log("expenses", expenses);
  let [filteredData, setFilteredData] = (0, import_react7.useState)([]), [wordEntered, setWordEntered] = (0, import_react7.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", {
        className: "searchInputs",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_antd3.Space, {
          direction: "vertical",
          style: { width: "100%" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Search, {
            placeholder: "input search text",
            enterButton: !0,
            size: "large",
            suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_icons3.CloseOutlined, {
              onClick: () => {
                setFilteredData([]), setWordEntered("");
              }
            }, void 0, !1, {
              fileName: "app/routes/user/search.jsx",
              lineNumber: 39,
              columnNumber: 21
            }, this),
            value: wordEntered,
            onChange: (event) => {
              let searchWord = event.target.value;
              setWordEntered(searchWord);
              let newFilter = expenses.filter((value) => value.title.toLowerCase().includes(searchWord.toLowerCase()));
              setFilteredData(searchWord === "" ? [] : newFilter);
            }
          }, void 0, !1, {
            fileName: "app/routes/user/search.jsx",
            lineNumber: 35,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/user/search.jsx",
          lineNumber: 34,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/user/search.jsx",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      filteredData.length != 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_antd3.Card, {
        style: { marginTop: "10px" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", {
          className: "dataResult",
          children: filteredData.slice(0, 15).map((value, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", {
            className: "dataItem",
            href: value.title,
            target: "_blank",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", {
              style: { margin: 0 },
              children: [
                value.title,
                " "
              ]
            }, void 0, !0, {
              fileName: "app/routes/user/search.jsx",
              lineNumber: 51,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/user/search.jsx",
            lineNumber: 50,
            columnNumber: 17
          }, this))
        }, void 0, !1, {
          fileName: "app/routes/user/search.jsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/user/search.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/user/search.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/user/$transaction.jsx
var import_antd5 = require("antd"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
async function getExpenseList(id) {
  try {
    let res = await import_axios2.default.get(`http://localhost:4000/api/expense/user/${id}`);
    return { mydata: await (res == null ? void 0 : res.data) };
  } catch (error) {
    return console.log(error.message, "error"), { error };
  }
}
async function loader({ params }) {
  return console.log("params", params), await getExpenseList("639c1738bebc82f02476e66a");
}
async function deleteExpense(id) {
  try {
    let res = await import_axios2.default.get(`http://localhost:4000/api/expense/delete/${id}`);
    return { mydata: await (res == null ? void 0 : res.data) };
  } catch (error) {
    return console.log(error.message, "error"), { error };
  }
}
var action2 = async ({ request, params }) => {
  switch (request.method) {
    case "DELETE":
    default:
      return "Fail to delete!";
  }
}, handleDelete = () => {
}, columns = [
  {
    title: "ItemName",
    dataIndex: "title",
    key: "title",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", {
      children: text
    }, void 0, !1, {
      fileName: "app/routes/user/$transaction.jsx",
      lineNumber: 54,
      columnNumber: 23
    }, this)
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount"
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category"
  },
  {
    title: "ExpenseDate",
    dataIndex: "createdAt",
    key: "createdAt"
  },
  {
    title: "Type",
    dataIndex: "amount",
    key: "amount",
    render: (_, { amount }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, {
      children: amount > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd4.Tag, {
        color: "green",
        children: "INCOME"
      }, void 0, !1, {
        fileName: "app/routes/user/$transaction.jsx",
        lineNumber: 78,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd4.Tag, {
        color: "red",
        children: "EXPENSE"
      }, void 0, !1, {
        fileName: "app/routes/user/$transaction.jsx",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/user/$transaction.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd4.Space, {
      size: "middle",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd4.Button, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_icons4.EditOutlined, {}, void 0, !1, {
            fileName: "app/routes/user/$transaction.jsx",
            lineNumber: 91,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/user/$transaction.jsx",
          lineNumber: 90,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd4.Button, {
          onClick: handleDelete(),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_icons4.DeleteOutlined, {}, void 0, !1, {
            fileName: "app/routes/user/$transaction.jsx",
            lineNumber: 94,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/user/$transaction.jsx",
          lineNumber: 93,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/user/$transaction.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  }
];
function Transaction() {
  let loaderData = (0, import_react9.useLoaderData)(), [expenses, setExpenses] = (0, import_react8.useState)([]);
  return console.log(expenses, "expensesexpenses"), (0, import_react8.useEffect)(() => {
    var _a, _b;
    let data = (_b = (_a = loaderData == null ? void 0 : loaderData.mydata) == null ? void 0 : _a.user) == null ? void 0 : _b.expenses;
    setExpenses(data);
  }, [loaderData]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(home_default, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd4.Breadcrumb, {
          style: {
            margin: "16px 0"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd4.Breadcrumb.Item, {
              style: { color: "#3dc4e0" },
              children: "User"
            }, void 0, !1, {
              fileName: "app/routes/user/$transaction.jsx",
              lineNumber: 117,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd4.Breadcrumb.Item, {
              children: "Transactions"
            }, void 0, !1, {
              fileName: "app/routes/user/$transaction.jsx",
              lineNumber: 118,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/user/$transaction.jsx",
          lineNumber: 112,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", {
          style: {
            padding: 24,
            minHeight: 360,
            background: "#fff"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd5.Row, {
              justify: "space-between",
              align: "middle",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd5.Col, {
                  span: 8,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", {
                    children: "All Expenses"
                  }, void 0, !1, {
                    fileName: "app/routes/user/$transaction.jsx",
                    lineNumber: 129,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/user/$transaction.jsx",
                  lineNumber: 128,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd5.Col, {
                  span: 8,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SearchBar, {
                    expenses
                  }, void 0, !1, {
                    fileName: "app/routes/user/$transaction.jsx",
                    lineNumber: 132,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/user/$transaction.jsx",
                  lineNumber: 131,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/user/$transaction.jsx",
              lineNumber: 127,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd4.Table, {
              columns,
              dataSource: expenses
            }, "", !1, {
              fileName: "app/routes/user/$transaction.jsx",
              lineNumber: 137,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/user/$transaction.jsx",
          lineNumber: 120,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/user/$transaction.jsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/user/$transaction.jsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}
var transaction_default = Transaction;

// app/routes/password/forgot.jsx
var forgot_exports = {};
__export(forgot_exports, {
  action: () => action3,
  default: () => Forgot,
  links: () => links2,
  resetPassword: () => resetPassword
});
var import_antd6 = require("antd"), import_icons5 = require("@ant-design/icons"), import_react10 = require("@remix-run/react"), import_react11 = require("react"), import_axios3 = __toESM(require("axios"));
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), { Title: Title2, Paragraph: Paragraph2, Text: Text2 } = import_antd6.Typography;
async function resetPassword(email) {
  try {
    let config = { headers: { "Content-Type": "application/json" } }, res = await import_axios3.default.post(
      "http://localhost:4000/api/user/password/forgot",
      email,
      config
    );
    return { mydata: await (res == null ? void 0 : res.data) };
  } catch (error) {
    return { error };
  }
}
async function action3({ request }) {
  let email = (await request.formData()).get("email"), formErrors = {
    email: validateEmail(email)
  };
  if (Object.values(formErrors).some(Boolean))
    return {
      formErrors
    };
  switch (request.method) {
    case "POST":
      return await resetPassword({ email });
    default:
      return "invalid forgot password data";
  }
}
function links2() {
  return [{ rel: "stylesheet", href: style_default }];
}
function Forgot() {
  var _a, _b, _c, _d, _e;
  let actionData = (0, import_react10.useActionData)(), [inputs, setInputs] = (0, import_react11.useState)({
    email: ""
  }), handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
    className: "main-user",
    children: [
      (_a = actionData == null ? void 0 : actionData.mydata) != null && _a.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_antd6.Alert, {
        type: "success",
        message: (_b = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _b.message
      }, void 0, !1, {
        fileName: "app/routes/password/forgot.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this) : null,
      (_c = actionData == null ? void 0 : actionData.error) != null && _c.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_antd6.Alert, {
        type: "error",
        message: "Could not find any user for this account!"
      }, void 0, !1, {
        fileName: "app/routes/password/forgot.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
        className: "main-user-component",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
          className: "main-component login",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_antd6.Avatar, {
              style: {
                backgroundColor: "#9c27b0",
                verticalAlign: "middle"
              },
              size: "large",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons5.UserOutlined, {
                size: "large"
              }, void 0, !1, {
                fileName: "app/routes/password/forgot.jsx",
                lineNumber: 80,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/password/forgot.jsx",
              lineNumber: 73,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Title2, {
              level: 2,
              style: { marginTop: "10px" },
              children: "Forgot password"
            }, void 0, !1, {
              fileName: "app/routes/password/forgot.jsx",
              lineNumber: 82,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text2, {
              style: { marginBottom: "15px" },
              children: "Enter your registered email to reset your password."
            }, void 0, !1, {
              fileName: "app/routes/password/forgot.jsx",
              lineNumber: 85,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react10.Form, {
              method: "POST",
              style: { width: "100%" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_antd6.Row, {
                gutter: [16, 16],
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_antd6.Col, {
                    span: 24,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_antd6.Input, {
                        name: "email",
                        placeholder: "Email Address",
                        required: !0,
                        size: "large",
                        value: inputs.email,
                        onChange: handleChange
                      }, void 0, !1, {
                        fileName: "app/routes/password/forgot.jsx",
                        lineNumber: 91,
                        columnNumber: 17
                      }, this),
                      (_d = actionData == null ? void 0 : actionData.formErrors) != null && _d.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text2, {
                        type: "danger",
                        children: (_e = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _e.email
                      }, void 0, !1, {
                        fileName: "app/routes/password/forgot.jsx",
                        lineNumber: 100,
                        columnNumber: 19
                      }, this) : null
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/password/forgot.jsx",
                    lineNumber: 90,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_antd6.Col, {
                    span: 24,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_antd6.Button, {
                      type: "primary",
                      htmlType: "submit",
                      size: "large",
                      children: "Reset Password"
                    }, void 0, !1, {
                      fileName: "app/routes/password/forgot.jsx",
                      lineNumber: 104,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/password/forgot.jsx",
                    lineNumber: 103,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_antd6.Col, {
                    span: 24,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Paragraph2, {
                      strong: !0,
                      children: [
                        "New here?",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_antd6.Button, {
                          type: "link",
                          href: "/",
                          children: "Sign Up"
                        }, void 0, !1, {
                          fileName: "app/routes/password/forgot.jsx",
                          lineNumber: 109,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/password/forgot.jsx",
                      lineNumber: 107,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/password/forgot.jsx",
                    lineNumber: 106,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/password/forgot.jsx",
                lineNumber: 89,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/password/forgot.jsx",
              lineNumber: 88,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/password/forgot.jsx",
          lineNumber: 72,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/password/forgot.jsx",
        lineNumber: 71,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/password/forgot.jsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

// app/routes/user/categories.jsx
var categories_exports = {};
__export(categories_exports, {
  action: () => action4,
  createExpense: () => createExpense,
  default: () => categories_default
});
var import_react12 = require("react");
var import_material = require("@mui/material"), import_antd7 = require("antd"), import_axios4 = __toESM(require("axios")), import_react13 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
async function createExpense(title, category, amount, createdAt, userId) {
  try {
    let config = { headers: { "Content-Type": "application/json" } }, res = await import_axios4.default.post("http://localhost:4000/api/expense/create", {
      title,
      category,
      amount,
      createdAt,
      userId,
      config
    });
    return { mydata: await (res == null ? void 0 : res.data) };
  } catch (error) {
    return console.log(error.message, "error"), { error };
  }
}
async function action4({ request }) {
  let form = await request.formData(), title = form.get("title"), category = form.get("category"), amount = form.get("amount"), date = form.get("date");
  switch (request.method) {
    case "POST":
      return await createExpense({
        title,
        category,
        amount,
        date,
        userId: "639c1738bebc82f02476e66a"
      });
    default:
      return "invalid form data";
  }
}
var Categories = () => {
  var _a, _b, _c;
  let actionData = (0, import_react13.useActionData)();
  console.log(actionData);
  let [formData, setFormData] = (0, import_react12.useState)({
    title: "",
    category: "",
    amount: "",
    date: ""
  }), categories = [
    "Food",
    "Clothes",
    "Transportation",
    "Health and personal care",
    "Bills & emis",
    "Education",
    "Home and utilities",
    "Groceries",
    "Insurance",
    "Rent"
  ], handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(home_default, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_antd7.Breadcrumb, {
            style: {
              margin: "16px 0"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_antd7.Breadcrumb.Item, {
                style: { color: "#3dc4e0" },
                children: "User"
              }, void 0, !1, {
                fileName: "app/routes/user/categories.jsx",
                lineNumber: 99,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_antd7.Breadcrumb.Item, {
                children: "Create New Expense"
              }, void 0, !1, {
                fileName: "app/routes/user/categories.jsx",
                lineNumber: 100,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/user/categories.jsx",
            lineNumber: 94,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
            style: {
              padding: 24,
              minHeight: 360,
              background: "#fff"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", {
                  children: "Add New Expense"
                }, void 0, !1, {
                  fileName: "app/routes/user/categories.jsx",
                  lineNumber: 110,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/user/categories.jsx",
                lineNumber: 109,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
                style: {
                  maxWidth: "60%",
                  margin: "30px auto",
                  padding: "30px",
                  textAlign: "center",
                  boxShadow: "0 0 10px #c3c3c3"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", {
                      children: "Create New Expense"
                    }, void 0, !1, {
                      fileName: "app/routes/user/categories.jsx",
                      lineNumber: 122,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/user/categories.jsx",
                    lineNumber: 121,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react13.Form, {
                    method: "POST",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
                        style: { display: "flex", marginBottom: "20px" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
                            children: "Expense Title:"
                          }, void 0, !1, {
                            fileName: "app/routes/user/categories.jsx",
                            lineNumber: 126,
                            columnNumber: 17
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material.TextField, {
                            style: { marginLeft: "10px", width: "100%" },
                            required: !0,
                            label: "Title",
                            name: "title",
                            value: formData.title,
                            onChange: handleChange
                          }, void 0, !1, {
                            fileName: "app/routes/user/categories.jsx",
                            lineNumber: 127,
                            columnNumber: 17
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/user/categories.jsx",
                        lineNumber: 125,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
                        style: { display: "flex", marginBottom: "20px" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
                            children: "Select Category:"
                          }, void 0, !1, {
                            fileName: "app/routes/user/categories.jsx",
                            lineNumber: 137,
                            columnNumber: 17
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material.Select, {
                            style: { marginLeft: "10px", width: "100%" },
                            name: "category",
                            placeholder: "Select Category..",
                            value: formData.category,
                            onChange: handleChange,
                            children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material.MenuItem, {
                              value: item,
                              children: item
                            }, item, !1, {
                              fileName: "app/routes/user/categories.jsx",
                              lineNumber: 146,
                              columnNumber: 21
                            }, this))
                          }, void 0, !1, {
                            fileName: "app/routes/user/categories.jsx",
                            lineNumber: 138,
                            columnNumber: 17
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/user/categories.jsx",
                        lineNumber: 136,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
                        style: { display: "flex", marginBottom: "20px" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
                            children: [
                              "Add Expense Amount",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, !1, {
                                fileName: "app/routes/user/categories.jsx",
                                lineNumber: 155,
                                columnNumber: 21
                              }, this),
                              " (negative - expense, positive - income):"
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/user/categories.jsx",
                            lineNumber: 153,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material.TextField, {
                            style: { marginLeft: "10px", width: "100%" },
                            required: !0,
                            type: "number",
                            label: "Amount",
                            name: "amount",
                            value: formData.amount,
                            onChange: handleChange
                          }, void 0, !1, {
                            fileName: "app/routes/user/categories.jsx",
                            lineNumber: 157,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/user/categories.jsx",
                        lineNumber: 152,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
                        style: { display: "flex" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
                            children: "Select Expense Date:"
                          }, void 0, !1, {
                            fileName: "app/routes/user/categories.jsx",
                            lineNumber: 168,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material.TextField, {
                            style: { marginLeft: "10px", width: "100%" },
                            format: "DD-MM-YYYY",
                            type: "date",
                            name: "date",
                            value: formData.date,
                            onChange: handleChange
                          }, void 0, !1, {
                            fileName: "app/routes/user/categories.jsx",
                            lineNumber: 169,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/user/categories.jsx",
                        lineNumber: 167,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
                        style: { textAlign: "center", marginTop: "20px" },
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material.Button, {
                          type: "submit",
                          style: {
                            width: "100%",
                            marginTop: "30px",
                            color: "#fff",
                            background: "#2c2c58",
                            textTransform: "uppercase"
                          },
                          children: "Create Expense"
                        }, void 0, !1, {
                          fileName: "app/routes/user/categories.jsx",
                          lineNumber: 180,
                          columnNumber: 17
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/user/categories.jsx",
                        lineNumber: 179,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/user/categories.jsx",
                    lineNumber: 124,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/user/categories.jsx",
                lineNumber: 112,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/user/categories.jsx",
            lineNumber: 102,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/user/categories.jsx",
        lineNumber: 93,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material.Box, {
        sx: { width: 300, mx: "auto" },
        children: [
          (_a = actionData == null ? void 0 : actionData.mydata) != null && _a.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material.Alert, {
            variant: "outlined",
            severity: "success",
            children: (_b = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _b.message
          }, void 0, !1, {
            fileName: "app/routes/user/categories.jsx",
            lineNumber: 199,
            columnNumber: 11
          }, this) : null,
          (_c = actionData == null ? void 0 : actionData.error) != null && _c.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material.Alert, {
            variant: "outlined",
            severity: "error",
            children: "Fail to add.!"
          }, void 0, !1, {
            fileName: "app/routes/user/categories.jsx",
            lineNumber: 204,
            columnNumber: 11
          }, this) : null
        ]
      }, void 0, !0, {
        fileName: "app/routes/user/categories.jsx",
        lineNumber: 197,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/user/categories.jsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}, categories_default = Categories;

// app/routes/user/dashboard.jsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default
});
var import_react14 = require("react");

// app/assets/income.png
var income_default = "/build/_assets/income-RQON2RXK.png";

// app/assets/expense.png
var expense_default = "/build/_assets/expense-BRXV2O5W.png";

// app/assets/balance.jpg
var balance_default = "/build/_assets/balance-7TIQKPDZ.jpg";

// app/assets/TotalExpense.png
var TotalExpense_default = "/build/_assets/TotalExpense-FT7NH4E2.png";

// app/routes/user/dashboard.jsx
var import_antd8 = require("antd"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), Dashboard = () => {
  let {
    token: { colorBgContainer }
  } = import_antd8.theme.useToken();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(home_default, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_antd8.Breadcrumb, {
          style: {
            margin: "16px 0"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_antd8.Breadcrumb.Item, {
              style: { color: "#3dc4e0" },
              children: "User"
            }, void 0, !1, {
              fileName: "app/routes/user/dashboard.jsx",
              lineNumber: 23,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_antd8.Breadcrumb.Item, {
              children: "Dashboard"
            }, void 0, !1, {
              fileName: "app/routes/user/dashboard.jsx",
              lineNumber: 24,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/user/dashboard.jsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
          style: {
            padding: 24,
            minHeight: 360,
            background: colorBgContainer
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", {
                children: "User Dashboard"
              }, void 0, !1, {
                fileName: "app/routes/user/dashboard.jsx",
                lineNumber: 33,
                columnNumber: 16
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/user/dashboard.jsx",
              lineNumber: 33,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
              style: {
                display: "flex",
                gap: 20,
                justifyContent: "space-evenly",
                marginBottom: "20px"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_antd8.Card, {
                  style: {
                    height: 150,
                    width: 250,
                    display: "grid",
                    justifyContent: "center",
                    boxShadow: "0 0 10px #c3c3c3",
                    borderRadius: 0
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
                      style: { display: "flex", justifyContent: "center" },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", {
                        src: income_default,
                        width: 50,
                        height: 50,
                        alt: ""
                      }, void 0, !1, {
                        fileName: "app/routes/user/dashboard.jsx",
                        lineNumber: 53,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/user/dashboard.jsx",
                      lineNumber: 52,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
                      children: "Total Income"
                    }, void 0, !1, {
                      fileName: "app/routes/user/dashboard.jsx",
                      lineNumber: 55,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
                      children: "$ 234,765"
                    }, void 0, !1, {
                      fileName: "app/routes/user/dashboard.jsx",
                      lineNumber: 56,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/user/dashboard.jsx",
                  lineNumber: 42,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_antd8.Card, {
                  style: {
                    height: 150,
                    width: 250,
                    display: "grid",
                    justifyContent: "center",
                    boxShadow: "0 0 10px #c3c3c3",
                    borderRadius: 0
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
                      style: { display: "flex", justifyContent: "center" },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", {
                        src: expense_default,
                        width: 50,
                        height: 50,
                        alt: ""
                      }, void 0, !1, {
                        fileName: "app/routes/user/dashboard.jsx",
                        lineNumber: 69,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/user/dashboard.jsx",
                      lineNumber: 68,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
                      children: "Total Expense"
                    }, void 0, !1, {
                      fileName: "app/routes/user/dashboard.jsx",
                      lineNumber: 71,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
                      children: "$ 234,765"
                    }, void 0, !1, {
                      fileName: "app/routes/user/dashboard.jsx",
                      lineNumber: 72,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/user/dashboard.jsx",
                  lineNumber: 58,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_antd8.Card, {
                  style: {
                    height: 150,
                    width: 250,
                    display: "grid",
                    justifyContent: "center",
                    boxShadow: "0 0 10px #c3c3c3",
                    borderRadius: 0
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
                      style: { display: "flex", justifyContent: "center" },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", {
                        src: balance_default,
                        width: 50,
                        height: 50,
                        alt: ""
                      }, void 0, !1, {
                        fileName: "app/routes/user/dashboard.jsx",
                        lineNumber: 85,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/user/dashboard.jsx",
                      lineNumber: 84,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
                      children: "Balance"
                    }, void 0, !1, {
                      fileName: "app/routes/user/dashboard.jsx",
                      lineNumber: 87,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
                      children: "$ 234,765"
                    }, void 0, !1, {
                      fileName: "app/routes/user/dashboard.jsx",
                      lineNumber: 88,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/user/dashboard.jsx",
                  lineNumber: 74,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_antd8.Card, {
                  style: {
                    height: 150,
                    width: 250,
                    display: "grid",
                    justifyContent: "center",
                    boxShadow: "0 0 10px #c3c3c3",
                    borderRadius: 0
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
                      style: { display: "flex", justifyContent: "center" },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", {
                        src: TotalExpense_default,
                        width: 50,
                        height: 50,
                        alt: ""
                      }, void 0, !1, {
                        fileName: "app/routes/user/dashboard.jsx",
                        lineNumber: 101,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/user/dashboard.jsx",
                      lineNumber: 100,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
                      children: " Number of Expenses "
                    }, void 0, !1, {
                      fileName: "app/routes/user/dashboard.jsx",
                      lineNumber: 103,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
                      children: "$765"
                    }, void 0, !1, {
                      fileName: "app/routes/user/dashboard.jsx",
                      lineNumber: 104,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/user/dashboard.jsx",
                  lineNumber: 90,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/user/dashboard.jsx",
              lineNumber: 34,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
              style: {
                display: "flex",
                justifyContent: "space-evenly",
                gap: 20
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_antd8.Card, {
                  style: {
                    height: 400,
                    width: 560,
                    boxShadow: "0 0 10px #c3c3c3",
                    borderRadius: 0
                  },
                  children: "Category Summary"
                }, void 0, !1, {
                  fileName: "app/routes/user/dashboard.jsx",
                  lineNumber: 114,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_antd8.Card, {
                  style: {
                    height: 400,
                    width: 560,
                    boxShadow: "0 0 10px #c3c3c3",
                    borderRadius: 0
                  },
                  children: "Expense Summary"
                }, void 0, !1, {
                  fileName: "app/routes/user/dashboard.jsx",
                  lineNumber: 124,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/user/dashboard.jsx",
              lineNumber: 107,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/user/dashboard.jsx",
          lineNumber: 26,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/user/dashboard.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/user/dashboard.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}, dashboard_default = Dashboard;

// app/routes/user/reports.jsx
var reports_exports = {};
__export(reports_exports, {
  default: () => reports_default,
  getExpenseList: () => getExpenseList2,
  loader: () => loader2
});
var import_react15 = require("react"), import_antd9 = require("antd");
var import_axios5 = __toESM(require("axios")), import_react16 = require("@remix-run/react");
var import_antd10 = require("antd"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
async function getExpenseList2(id) {
  try {
    let res = await import_axios5.default.get(`http://localhost:4000/api/expense/user/${id}`);
    return { mydata: await (res == null ? void 0 : res.data) };
  } catch (error) {
    return console.log(error.message, "error"), { error };
  }
}
async function loader2({ params }) {
  return await getExpenseList2("639c1738bebc82f02476e66a");
}
var columns2 = [
  {
    title: "ItemName",
    dataIndex: "title",
    key: "title",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("a", {
      children: text
    }, void 0, !1, {
      fileName: "app/routes/user/reports.jsx",
      lineNumber: 30,
      columnNumber: 23
    }, this)
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount"
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category"
  },
  {
    title: "ExpenseDate",
    dataIndex: "createdAt",
    key: "createdAt"
  }
];
function Report() {
  let loaderData = (0, import_react16.useLoaderData)(), [expenses, setExpenses] = (0, import_react15.useState)([]);
  return console.log("loaderdata", expenses), (0, import_react15.useEffect)(() => {
    var _a, _b;
    let data = (_b = (_a = loaderData == null ? void 0 : loaderData.mydata) == null ? void 0 : _a.user) == null ? void 0 : _b.expenses;
    setExpenses(data);
  }, [loaderData]), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(home_default, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd9.Breadcrumb, {
          style: {
            margin: "16px 0"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd9.Breadcrumb.Item, {
              style: { color: "#3dc4e0" },
              children: "User"
            }, void 0, !1, {
              fileName: "app/routes/user/reports.jsx",
              lineNumber: 64,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd9.Breadcrumb.Item, {
              children: "Reports"
            }, void 0, !1, {
              fileName: "app/routes/user/reports.jsx",
              lineNumber: 65,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/user/reports.jsx",
          lineNumber: 59,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", {
          style: {
            padding: 24,
            minHeight: 360,
            background: "#ffffff"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd10.Row, {
              justify: "space-between",
              align: "middle",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd10.Col, {
                  span: 8,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", {
                    children: "Download Expense Report"
                  }, void 0, !1, {
                    fileName: "app/routes/user/reports.jsx",
                    lineNumber: 76,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/user/reports.jsx",
                  lineNumber: 75,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd10.Col, {
                  span: 8,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(SearchBar, {
                    expenses
                  }, void 0, !1, {
                    fileName: "app/routes/user/reports.jsx",
                    lineNumber: 79,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/user/reports.jsx",
                  lineNumber: 78,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/user/reports.jsx",
              lineNumber: 74,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd9.Table, {
              columns: columns2,
              dataSource: expenses
            }, void 0, !1, {
              fileName: "app/routes/user/reports.jsx",
              lineNumber: 83,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/user/reports.jsx",
          lineNumber: 67,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/user/reports.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/user/reports.jsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
var reports_default = Report;

// app/routes/user/setting.jsx
var setting_exports = {};
__export(setting_exports, {
  default: () => setting_default
});
var import_react17 = require("react");
var import_antd11 = require("antd"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Setting = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(home_default, {
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_antd11.Breadcrumb, {
        style: {
          margin: "16px 0"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_antd11.Breadcrumb.Item, {
            style: { color: "#3dc4e0" },
            children: "User"
          }, void 0, !1, {
            fileName: "app/routes/user/setting.jsx",
            lineNumber: 17,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_antd11.Breadcrumb.Item, {
            children: "Settings"
          }, void 0, !1, {
            fileName: "app/routes/user/setting.jsx",
            lineNumber: 18,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/user/setting.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", {
        style: {
          padding: 24,
          minHeight: 360,
          background: "#fff"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", {
            children: "Profile Settings"
          }, void 0, !1, {
            fileName: "app/routes/user/setting.jsx",
            lineNumber: 27,
            columnNumber: 16
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/user/setting.jsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/user/setting.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/user/setting.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/routes/user/setting.jsx",
  lineNumber: 10,
  columnNumber: 5
}, this), setting_default = Setting;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action5,
  createUser: () => createUser,
  default: () => Signup,
  links: () => links3
});
var import_react18 = require("react"), import_react19 = require("@remix-run/react"), import_axios6 = __toESM(require("axios")), import_react_redux3 = require("react-redux");
var import_antd12 = require("antd"), import_icons6 = require("@ant-design/icons"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), { Title: Title3, Paragraph: Paragraph3, Text: Text3 } = import_antd12.Typography;
async function createUser(firstname, lastname, email, password, cpassword) {
  try {
    let config = { headers: { "Content-Type": "application/json" } }, res = await import_axios6.default.post(
      "http://localhost:4000/api/user/signup",
      firstname,
      lastname,
      email,
      password,
      cpassword,
      config
    );
    return { mydata: await (res == null ? void 0 : res.data) };
  } catch (error) {
    return { error };
  }
}
async function action5({ request }) {
  let form = await request.formData(), firstname = form.get("firstname"), lastname = form.get("lastname"), email = form.get("email"), password = form.get("password"), cpassword = form.get("cpassword"), formErrors = {
    firstname: validatefirst(firstname),
    lastname: validatelast(lastname),
    email: validateEmail(email),
    password: validatePassword(password),
    cpassword: validateComfirmPassword(password, cpassword)
  };
  if (Object.values(formErrors).some(Boolean))
    return {
      formErrors
    };
  switch (request.method) {
    case "POST":
      return await createUser({
        firstname,
        lastname,
        email,
        password,
        cpassword
      });
    default:
      return "invalid form data";
  }
}
function links3() {
  return [{ rel: "stylesheet", href: style_default }];
}
function Signup() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  let actionData = (0, import_react19.useActionData)(), dispatch = (0, import_react_redux3.useDispatch)(), navigate = (0, import_react19.useNavigate)(), userId = (_a = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _a.user._id, [inputs, setInputs] = (0, import_react18.useState)({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: ""
  });
  (0, import_react18.useEffect)(() => userId == null ? navigate("/") : (dispatch({ type: "login" }), navigate("/user/dashboard")), [dispatch, navigate, userId]);
  let handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", {
    className: "main-user",
    children: [
      (_b = actionData == null ? void 0 : actionData.mydata) != null && _b.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Alert, {
        message: (_c = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _c.message,
        type: "success"
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 113,
        columnNumber: 9
      }, this) : null,
      (_d = actionData == null ? void 0 : actionData.error) != null && _d.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Alert, {
        message: "User Already Exits, Please login",
        type: "error"
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 116,
        columnNumber: 9
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", {
        className: "main-user-component",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", {
          className: "main-component",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Avatar, {
              style: {
                backgroundColor: "#9c27b0",
                verticalAlign: "middle"
              },
              size: "large",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_icons6.UserOutlined, {
                size: "large"
              }, void 0, !1, {
                fileName: "app/routes/index.jsx",
                lineNumber: 127,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/index.jsx",
              lineNumber: 120,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Title3, {
              level: 2,
              style: { marginTop: "10px" },
              children: "Sign up"
            }, void 0, !1, {
              fileName: "app/routes/index.jsx",
              lineNumber: 129,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react19.Form, {
              method: "POST",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Row, {
                gutter: [16, 16],
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Col, {
                    span: 12,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Input, {
                        name: "firstname",
                        placeholder: "FirstName",
                        required: !0,
                        size: "large",
                        value: inputs.firstname,
                        onChange: handleChange
                      }, void 0, !1, {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 135,
                        columnNumber: 15
                      }, this),
                      (_e = actionData == null ? void 0 : actionData.formErrors) != null && _e.firstname ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Text3, {
                        type: "danger",
                        children: (_f = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _f.firstname
                      }, void 0, !1, {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 144,
                        columnNumber: 17
                      }, this) : null
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 134,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Col, {
                    span: 12,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Input, {
                        name: "lastname",
                        placeholder: "lastName",
                        required: !0,
                        size: "large",
                        value: inputs.lastname,
                        onChange: handleChange
                      }, void 0, !1, {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 150,
                        columnNumber: 15
                      }, this),
                      (_g = actionData == null ? void 0 : actionData.formErrors) != null && _g.lastname ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Text3, {
                        type: "danger",
                        children: (_h = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _h.lastname
                      }, void 0, !1, {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 159,
                        columnNumber: 17
                      }, this) : null
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 149,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Col, {
                    span: 24,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Input, {
                        name: "email",
                        placeholder: "Email Address",
                        required: !0,
                        size: "large",
                        value: inputs.email,
                        onChange: handleChange
                      }, void 0, !1, {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 165,
                        columnNumber: 15
                      }, this),
                      (_i = actionData == null ? void 0 : actionData.formErrors) != null && _i.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Text3, {
                        type: "danger",
                        children: (_j = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _j.email
                      }, void 0, !1, {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 174,
                        columnNumber: 17
                      }, this) : null
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 164,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Col, {
                    span: 24,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Input, {
                        name: "password",
                        placeholder: "Password",
                        required: !0,
                        size: "large",
                        type: "password",
                        value: inputs.password,
                        onChange: handleChange
                      }, void 0, !1, {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 180,
                        columnNumber: 15
                      }, this),
                      (_k = actionData == null ? void 0 : actionData.formErrors) != null && _k.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Text3, {
                        type: "danger",
                        children: (_l = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _l.password
                      }, void 0, !1, {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 190,
                        columnNumber: 17
                      }, this) : null
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 179,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Col, {
                    span: 24,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Input, {
                        name: "cpassword",
                        placeholder: "Confirm Password",
                        required: !0,
                        type: "password",
                        size: "large",
                        value: inputs.cpassword,
                        onChange: handleChange
                      }, void 0, !1, {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 196,
                        columnNumber: 15
                      }, this),
                      (_m = actionData == null ? void 0 : actionData.formErrors) != null && _m.cpassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Text3, {
                        type: "danger",
                        children: (_n = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _n.cpassword
                      }, void 0, !1, {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 206,
                        columnNumber: 17
                      }, this) : null
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 195,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Col, {
                    span: 24,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Button, {
                      type: "primary",
                      htmlType: "submit",
                      size: "large",
                      children: "Sign Up"
                    }, void 0, !1, {
                      fileName: "app/routes/index.jsx",
                      lineNumber: 212,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 211,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Col, {
                    span: 24,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Paragraph3, {
                      strong: !0,
                      children: [
                        "Already have an account?",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Button, {
                          type: "link",
                          href: "/login",
                          children: "Sign In"
                        }, void 0, !1, {
                          fileName: "app/routes/index.jsx",
                          lineNumber: 217,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/index.jsx",
                      lineNumber: 215,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 214,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/index.jsx",
                lineNumber: 133,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/index.jsx",
              lineNumber: 132,
              columnNumber: 9
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/index.jsx",
          lineNumber: 119,
          columnNumber: 7
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 118,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action6,
  default: () => Login,
  links: () => links4,
  loginUser: () => loginUser
});
var import_antd13 = require("antd"), import_icons7 = require("@ant-design/icons"), import_react20 = require("@remix-run/react"), import_react21 = require("react"), import_axios7 = __toESM(require("axios")), import_react_redux4 = require("react-redux");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), { Title: Title4, Paragraph: Paragraph4, Text: Text4 } = import_antd13.Typography;
async function loginUser(email, password) {
  try {
    let config = { headers: { "Content-Type": "application/json" } }, res = await import_axios7.default.post(
      "http://localhost:4000/api/user/login",
      email,
      password,
      config
    );
    return { mydata: await (res == null ? void 0 : res.data) };
  } catch (error) {
    return { error };
  }
}
async function action6({ request }) {
  let form = await request.formData(), email = form.get("email"), password = form.get("password");
  switch (request.method) {
    case "POST":
      return await loginUser({ email, password });
    default:
      return "invalid login form data";
  }
}
function links4() {
  return [{ rel: "stylesheet", href: style_default }];
}
function Login() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let actionData = (0, import_react20.useActionData)(), isAuthenticated = (0, import_react_redux4.useSelector)((state) => state.isAuthenticated), dispatch = (0, import_react_redux4.useDispatch)(), navigate = (0, import_react20.useNavigate)(), userId = (_a = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _a.user._id, [inputs, setInputs] = (0, import_react21.useState)({
    email: "",
    password: ""
  });
  (0, import_react21.useEffect)(() => userId == null ? navigate("/login") : (localStorage.setItem("id", userId), dispatch({ type: "login" }), navigate("/user/dashboard")), [dispatch, navigate, userId]);
  let handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
    className: "main-user",
    children: [
      (_b = actionData == null ? void 0 : actionData.mydata) != null && _b.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Alert, {
        message: (_c = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _c.message,
        type: "success"
      }, void 0, !1, {
        fileName: "app/routes/login.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this) : null,
      (_d = actionData == null ? void 0 : actionData.error) != null && _d.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Alert, {
        message: "Please provide a valid email address and password.",
        type: "error"
      }, void 0, !1, {
        fileName: "app/routes/login.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
        className: "main-user-component",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
          className: "main-component login",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Avatar, {
              style: {
                backgroundColor: "#9c27b0",
                verticalAlign: "middle"
              },
              size: "large",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_icons7.UserOutlined, {
                size: "large"
              }, void 0, !1, {
                fileName: "app/routes/login.jsx",
                lineNumber: 88,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/login.jsx",
              lineNumber: 81,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Title4, {
              level: 2,
              style: { marginTop: "10px" },
              children: "Login"
            }, void 0, !1, {
              fileName: "app/routes/login.jsx",
              lineNumber: 90,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react20.Form, {
              method: "POST",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Row, {
                gutter: [16, 16],
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Col, {
                    span: 24,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Input, {
                        name: "email",
                        placeholder: "Email Address",
                        required: !0,
                        size: "large",
                        value: inputs.email,
                        onChange: handleChange
                      }, void 0, !1, {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 96,
                        columnNumber: 17
                      }, this),
                      (_e = actionData == null ? void 0 : actionData.formErrors) != null && _e.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Text4, {
                        type: "danger",
                        children: (_f = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _f.email
                      }, void 0, !1, {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 105,
                        columnNumber: 19
                      }, this) : null
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 95,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Col, {
                    span: 24,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Input, {
                        name: "password",
                        placeholder: "Password",
                        required: !0,
                        size: "large",
                        type: "password",
                        value: inputs.password,
                        onChange: handleChange
                      }, void 0, !1, {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 111,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Row, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Col, {
                            span: 16,
                            children: (_g = actionData == null ? void 0 : actionData.formErrors) != null && _g.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Text4, {
                              type: "danger",
                              children: (_h = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _h.password
                            }, void 0, !1, {
                              fileName: "app/routes/login.jsx",
                              lineNumber: 123,
                              columnNumber: 19
                            }, this) : null
                          }, void 0, !1, {
                            fileName: "app/routes/login.jsx",
                            lineNumber: 121,
                            columnNumber: 15
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Col, {
                            span: 8,
                            align: "right",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Paragraph4, {
                              strong: !0,
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Button, {
                                type: "link",
                                href: "/password/forgot",
                                style: { padding: 0 },
                                children: "Forgot Your Password"
                              }, void 0, !1, {
                                fileName: "app/routes/login.jsx",
                                lineNumber: 130,
                                columnNumber: 21
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/login.jsx",
                              lineNumber: 129,
                              columnNumber: 15
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/login.jsx",
                            lineNumber: 128,
                            columnNumber: 15
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 120,
                        columnNumber: 14
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 110,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Col, {
                    span: 24,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Button, {
                      type: "primary",
                      htmlType: "submit",
                      size: "large",
                      children: "Login"
                    }, void 0, !1, {
                      fileName: "app/routes/login.jsx",
                      lineNumber: 139,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 138,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Col, {
                    span: 24,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Paragraph4, {
                      strong: !0,
                      children: [
                        "Don't have an account?",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd13.Button, {
                          type: "link",
                          href: "/",
                          children: "Sign Up"
                        }, void 0, !1, {
                          fileName: "app/routes/login.jsx",
                          lineNumber: 144,
                          columnNumber: 21
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/login.jsx",
                      lineNumber: 142,
                      columnNumber: 19
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 141,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/login.jsx",
                lineNumber: 94,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/login.jsx",
              lineNumber: 93,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/login.jsx",
          lineNumber: 80,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/login.jsx",
        lineNumber: 79,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/login.jsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "6af65042", entry: { module: "/build/entry.client-TRMMC6LK.js", imports: ["/build/_shared/chunk-YEDNQRUO.js", "/build/_shared/chunk-4IYZMDEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CUYB5RZO.js", imports: ["/build/_shared/chunk-RLDD3RZJ.js", "/build/_shared/chunk-YU6ZEH4Q.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-XMK77DFS.js", imports: ["/build/_shared/chunk-ULCG5VMN.js", "/build/_shared/chunk-IPLBJ2Q6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/layouts/home": { id: "routes/layouts/home", parentId: "root", path: "layouts/home", index: void 0, caseSensitive: void 0, module: "/build/routes/layouts/home-EWXWBEDB.js", imports: ["/build/_shared/chunk-ZGYNMSNN.js", "/build/_shared/chunk-IPLBJ2Q6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-3SHJRI2P.js", imports: ["/build/_shared/chunk-ULCG5VMN.js", "/build/_shared/chunk-IPLBJ2Q6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/password/forgot": { id: "routes/password/forgot", parentId: "root", path: "password/forgot", index: void 0, caseSensitive: void 0, module: "/build/routes/password/forgot-OIGSRWPY.js", imports: ["/build/_shared/chunk-ULCG5VMN.js", "/build/_shared/chunk-IPLBJ2Q6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/password/reset/$id/$reset": { id: "routes/password/reset/$id/$reset", parentId: "root", path: "password/reset/:id/:reset", index: void 0, caseSensitive: void 0, module: "/build/routes/password/reset/$id/$reset-HJHKFY3N.js", imports: ["/build/_shared/chunk-ULCG5VMN.js", "/build/_shared/chunk-IPLBJ2Q6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/$transaction": { id: "routes/user/$transaction", parentId: "root", path: "user/:transaction", index: void 0, caseSensitive: void 0, module: "/build/routes/user/$transaction-5GOJW3SE.js", imports: ["/build/_shared/chunk-GTCDZXFH.js", "/build/_shared/chunk-ZGYNMSNN.js", "/build/_shared/chunk-IPLBJ2Q6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/categories": { id: "routes/user/categories", parentId: "root", path: "user/categories", index: void 0, caseSensitive: void 0, module: "/build/routes/user/categories-PONVNKOP.js", imports: ["/build/_shared/chunk-ZGYNMSNN.js", "/build/_shared/chunk-IPLBJ2Q6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/dashboard": { id: "routes/user/dashboard", parentId: "root", path: "user/dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/user/dashboard-IQQGCNUX.js", imports: ["/build/_shared/chunk-ZGYNMSNN.js", "/build/_shared/chunk-IPLBJ2Q6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/reports": { id: "routes/user/reports", parentId: "root", path: "user/reports", index: void 0, caseSensitive: void 0, module: "/build/routes/user/reports-TLKBV4XP.js", imports: ["/build/_shared/chunk-GTCDZXFH.js", "/build/_shared/chunk-ZGYNMSNN.js", "/build/_shared/chunk-IPLBJ2Q6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/search": { id: "routes/user/search", parentId: "root", path: "user/search", index: void 0, caseSensitive: void 0, module: "/build/routes/user/search-HRP5KYCP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/setting": { id: "routes/user/setting", parentId: "root", path: "user/setting", index: void 0, caseSensitive: void 0, module: "/build/routes/user/setting-74USTN3S.js", imports: ["/build/_shared/chunk-ZGYNMSNN.js", "/build/_shared/chunk-IPLBJ2Q6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/validation": { id: "routes/validation", parentId: "root", path: "validation", index: void 0, caseSensitive: void 0, module: "/build/routes/validation-QALFL2JY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-6AF65042.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/password/reset/$id/$reset": {
    id: "routes/password/reset/$id/$reset",
    parentId: "root",
    path: "password/reset/:id/:reset",
    index: void 0,
    caseSensitive: void 0,
    module: reset_exports
  },
  "routes/user/$transaction": {
    id: "routes/user/$transaction",
    parentId: "root",
    path: "user/:transaction",
    index: void 0,
    caseSensitive: void 0,
    module: transaction_exports
  },
  "routes/password/forgot": {
    id: "routes/password/forgot",
    parentId: "root",
    path: "password/forgot",
    index: void 0,
    caseSensitive: void 0,
    module: forgot_exports
  },
  "routes/user/categories": {
    id: "routes/user/categories",
    parentId: "root",
    path: "user/categories",
    index: void 0,
    caseSensitive: void 0,
    module: categories_exports
  },
  "routes/user/dashboard": {
    id: "routes/user/dashboard",
    parentId: "root",
    path: "user/dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/layouts/home": {
    id: "routes/layouts/home",
    parentId: "root",
    path: "layouts/home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  },
  "routes/user/reports": {
    id: "routes/user/reports",
    parentId: "root",
    path: "user/reports",
    index: void 0,
    caseSensitive: void 0,
    module: reports_exports
  },
  "routes/user/setting": {
    id: "routes/user/setting",
    parentId: "root",
    path: "user/setting",
    index: void 0,
    caseSensitive: void 0,
    module: setting_exports
  },
  "routes/user/search": {
    id: "routes/user/search",
    parentId: "root",
    path: "user/search",
    index: void 0,
    caseSensitive: void 0,
    module: search_exports
  },
  "routes/validation": {
    id: "routes/validation",
    parentId: "root",
    path: "validation",
    index: void 0,
    caseSensitive: void 0,
    module: validation_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
