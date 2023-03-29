const sign_up_and_sign_in = {
  identifiers_email: '邮件地址',
  identifiers_phone: '手机号码',
  identifiers_username: '用户名',
  identifiers_email_or_sms: '邮件地址或手机号码',
  identifiers_none: '无',
  and: '与',
  or: '或',
  sign_up: {
    title: '注册',
    sign_up_identifier: '注册标识',
    identifier_description: '创建账户时你需要设定注册标识。这些信息在用户登录时，属于必选项。',
    sign_up_authentication: '注册身份认证设置',
    authentication_description: '注册时，你的用户将要完成以下所有勾选的任务。',
    set_a_password_option: '创建密码',
    verify_at_sign_up_option: '注册时验证身份',
    social_only_creation_description: '（仅对社交注册用户适用）',
  },
  sign_in: {
    title: '登录',
    sign_in_identifier_and_auth: '登录标识和身份认证设置',
    description: '用户可以使用任何可用的选项进行登录。拖拽选项即可调整页面布局。',
    add_sign_in_method: '添加登录方式',
    password_auth: '密码',
    verification_code_auth: '验证码',
    auth_swap_tip: '交换以下选项的位置即可设定它们在用户登录流程中出现的先后。',
    require_auth_factor: '请至少选择一种认证方式。',
  },
  social_sign_in: {
    title: '社交登录',
    social_sign_in: '社交登录',
    description: '你已设定特定的标识。用户在通过社交连接器注册时可能会被要求提供一个对应的标识。',
    add_social_connector: '添加社交连接器',
    set_up_hint: {
      not_in_list: '没有你想要的连接器？',
      set_up_more: '立即设置',
      go_to: '其他社交连接器。',
    },
  },
  tip: {
    set_a_password: '启用户名注册，必须设置密码。',
    verify_at_sign_up:
      '我们目前仅支持经过验证的邮件地址登录。如果没有验证，你的用户信息中可能出现大量无效电子邮件地址。',
    password_auth: '因注册设置里你启用了用户名密码标识。这个信息在用户登录时，属于必选项。',
    verification_code_auth:
      '因注册设置里你启用了验证码标识，验证码属于用户必选项。开启密码注册后，你可以选择关闭验证码登录。',
    delete_sign_in_method:
      '因注册设置里你启用了{{identifier}}标识。这些信息在用户登录时，属于必选项。',
  },
};
export default sign_up_and_sign_in;
