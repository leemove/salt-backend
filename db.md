# 数据设计

## User

|字段|含义|类型|可空|
|--|--|--|--|
|name|账号|string|--|
|nickname|昵称|string|--|
|avator|头像|string|是|
|password|密码|string|--|
|admin|是否是管理员|boolean|--|

## Article

|字段|含义|类型|可空|
|--|--|--|--|
|cover|封面图片地址|string|
|title|标题|string|--|
|content|内容|string|--|
|createTime|创建日期|Date|--|
|publicTime|发布日期|Date|--|
|author|作者|User.ObjectId|--|