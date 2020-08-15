using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalRWebPack.Hubs
{
    public class ChatHub : Hub
    {
        public async Task Send()
        {
            await Clients.All.SendAsync("sync", "hello World!");
        }
    }
}