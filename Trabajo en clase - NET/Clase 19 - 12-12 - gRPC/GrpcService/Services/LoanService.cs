using Grpc.Core;
using GrpcService.Loan;

namespace GrpcService.Services
{
    public class LoanService : Loan.Loan.LoanBase
    {
        public override Task<LoanResponse> ChangeStatus(LoanChangeStatusRequest request, ServerCallContext context)
        {
            // cambio de estado a partir de request.Id
            return base.ChangeStatus(request, context);
        }
    }
}
