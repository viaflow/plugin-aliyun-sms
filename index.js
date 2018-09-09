import SMSClient from '@alicloud/sms-sdk'

export const Define = {
    name: 'Aliyun SMS',
    desc: 'Aliyun short message for ViaFlow',
    fields: [
        {
            name: 'AccessKeyId',
            display: 'AccessKey ID',
            required: true,
            type: String,
        }, {
            name: 'SecretAccessKey',
            display: '	Access Key Secret',
            required: true,
            type: String,
        }, {
            name: 'PhoneNumbers',
            display: 'Phone Number(Single)',
            type: String,
            required: true,
        }, {
            name: 'SignName',
            display: 'Sign Name',
            type: String,
            required: true,
        }, {
            name: 'TemplateCode',
            display: 'Template Code',
            type: String,
            required: true,
        }, {
            name: 'TemplateParam',
            display: 'Template Param',
            type: Object,
            required: true,
        },
    ],
};

export const Execute = async (input) => {
    try {
        let smsClient = new SMSClient({ accessKeyId: input.data.AccessKeyId, secretAccessKey: input.data.SecretAccessKey });

        const result = await smsClient.sendSMS({
            PhoneNumbers: input.data.PhoneNumbers,
            SignName: input.data.SignName,
            TemplateCode: input.data.TemplateCode,
            TemplateParam: input.data.TemplateParam
        })
        const rst = {
            code: true,
            data: result,
        };
        return rst;
    } catch (exp) {
        return {
            code: false,
            error: exp.message,
            data: {}
        }
    }
};