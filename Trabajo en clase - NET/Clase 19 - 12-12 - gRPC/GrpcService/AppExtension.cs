using GrpcService.Services;

namespace GrpcService
{
    public static class AppExtension
    {
        public static WebApplication AddGrpc(this WebApplication app)
        {
            app.MapGrpcService<GreeterService>();
            app.MapGrpcReflectionService();
            return app;
        }
    }
}
