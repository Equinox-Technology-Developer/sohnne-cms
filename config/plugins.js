module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET_NAME'),
          ACL: null,
        },
        baseUrl: null, // This enables signed URLs
        expires: 60 * 60 * 24 * 365, // 1 year in seconds (maximum allowed)
      },
      actionOptions: {
        upload: {
          ACL: null
        },
        uploadStream: {
          ACL: null
        },
        delete: {},
      },
    },
  },
});